# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'json'
require "http"
require "optparse"

start = Time.now
# Seed Neighbourhoods --------------------------------------------------------------------------------------------
=begin
require 'nokogiri'
require 'geocoder'

allfiles = Dir[Rails.root.join("lib", "which-neighbourhood", "neighbourhood-data", "*.kml")]

puts "Destroying neighbourhoods..."
Neighbourhood.destroy_all
puts "Seeding neighbourhoods"

allfilesLength = allfiles.length
allfileN = 0

allfiles.each do |file|
  allfileN += 1

  doc = Nokogiri::XML(File.open(file))
  thisName = doc.at_css("Placemark").at_css("name").to_s[6..-8]

  puts "Working on location file " << thisName << " " << allfileN.to_s << " of " << allfilesLength.to_s


  coordinates = doc.at_css("coordinates")
  coordinatesArray = coordinates.to_s.split

  coordinatesArray.delete_at(0)
  coordinatesArray.delete_at(coordinatesArray.length - 1)

  coordinatesArray.map! { |set| set.split(",") }
  coordinatesArray.map! {
    |set| set[0], set[1] = set[1], set[0]
  }

  centerCoordinates = Geocoder::Calculations.geographic_center(coordinatesArray)

  nbh = Neighbourhood.find_or_create_by!(
    :name => thisName,
    :centerlat => centerCoordinates[0],
    :centerlong => centerCoordinates[1]
  )

  coordinatesArray.each do |coord|
    nbh.border_points.create!({
      lat: coord[0],
      long: coord[1]
    })
  end
end

# Seed Places ----------------------------------------------------------------------------------------------------

require Rails.root.join("lib", "which-neighbourhood", "whichNeighbourhood.rb")

alldata = Dir[Rails.root.join("lib", "populartimes", "popular-times-data", "*.txt")]
fileNum = 0
fileTotal = alldata.length

alldata.each do |filename|
  fileNum += 1
  puts "Reading file " << filename << "..."
  puts "File number " << fileNum.to_s << " of " << fileTotal.to_s

  data = File.read(filename)

  jsonarr = JSON.parse(data)

  howManyPlaces = jsonarr.length

  arrnum = 0

  jsonarr.each do |obj|

    arrnum += 1

    obj = JSON.parse(obj)

    if obj.length == 0
      next
    end

    puts "Create place " << arrnum.to_s << " out of " << howManyPlaces.to_s << " places."

    obj = obj[0]

    if Place.exists?(:google_id => obj["id"])
      puts "Skipped existing Place"
      next
    end

    neighbourhood = whichNeighbourhood(obj["coordinates"]["lat"], obj["coordinates"]["lng"])
    nbh = Neighbourhood.find_or_create_by!(name: neighbourhood)

    toSave = nbh.places.new()
    if obj.key?("id")
      toSave.google_id = obj["id"]
    end
    if obj.key?("name")
      toSave.name = obj["name"]
    end
    if obj.key?("address")
      toSave.address = obj["address"]
    end
    if obj.key?("coordinates")
      toSave.lat = obj["coordinates"]["lat"]
      toSave.long = obj["coordinates"]["lng"]
    end
    if obj.key?("rating")
      toSave.rating = obj["rating"]
    end
    if obj.key?("rating_n")
      toSave.rating_n = obj["rating_n"]
    end
    #maybe take it out
    if obj.key?("international_phone_number")
      toSave.phone_number = obj["phone_number"]
    end
    if obj.key?("current_popularity")
      toSave.current_popularity = obj["current_popularity"]
    end
    if obj.key?("time_spent")
      toSave.time_spent_min = obj["time_spent"][0]
      toSave.time_spent_max = obj["time_spent"][1]
    end
    toSave.save
    if obj.key?("populartimes")
      obj["populartimes"].each_with_index do |day, day_index|
        day["data"].each_with_index do |data, hour_index|
          toSave.popular_times.create!({
            day_id:day_index+1,
            hour_id:hour_index+1,
            busy_value:data
          })
        end
      end
    end
    if obj.key?("types")
      obj["types"].each do |type|
        toSave.types.create!({
          name:type
        })
      end
    end
    if obj.key?("time_wait")
      obj["time_wait"].each_with_index do |day, day_index|
        day["data"].each_with_index do |data, hour_index|
          toSave.time_waits.create!({
            day_id:day_index+1,
            hour_id:hour_index+1,
            wait_minutes:data
          })
        end
      end
    end
  end
end

#Destroy Auxillary Data to facilitate testing
=begin
GoogleOpeningHour.destroy_all
GooglePhoto.destroy_all
GoogleReview.destroy_all
YelpCategory.destroy_all
YelpPhoto.destroy_all
YelpOpeningHour.destroy_all
YelpReview.destroy_all
HotScore.destroy_all
=end
=begin
# Delete franchise
Place.where(:name => "Subway").destroy_all
Place.where(:name => "Burger King").destroy_all
Place.where("name LIKE 'McDonald%'").destroy_all
Place.where("name LIKE 'Triple%'").destroy_all
Place.where(:name => "A&W Canada").destroy_all
Place.where("name LIKE 'Domino%'").destroy_all
Place.where(:name => "KFC").destroy_all
Place.where(:name => "Juice Bar").destroy_all

# Delete neighbourhoods
Neighbourhood.where(:name => "Dunbar Southlands").destroy_all
Neighbourhood.where(:name => "Arbutus Ridge").destroy_all
Neighbourhood.where(:name => "South Cambie").destroy_all
Neighbourhood.where(:name => "Riley Park").destroy_all
Neighbourhood.where(:name => "Kensington-Cedar Cottage").destroy_all
Neighbourhood.where(:name => "Grandview-Woodland").destroy_all

GOOGLEURL = "https://maps.googleapis.com/maps/api/place/details/json?"
GOOGLEAUTH = "key=" << ENV['GOOGLE_API_KEY']
GOOGLEPARAMS = "&placeid="

puts "Grabbing Yelp Data..."

plum = 0
placeCount = Place.count.to_s

API_KEY = ENV['YELP_API_KEY']

API_HOST = "https://api.yelp.com"
SEARCH_PATH = "/v3/businesses/search"
BUSINESS_PATH = "/v3/businesses/"  # trailing / because we append the business id to the path
PHONE_PATH = "/v3/businesses/search/phone"

DEFAULT_BUSINESS_ID = "yelp-san-francisco"
DEFAULT_TERM = "dinner"
DEFAULT_LOCATION = "Vancouver, BC"
SEARCH_LIMIT = 5

def search(term, location)
  url = "#{API_HOST}#{SEARCH_PATH}"
  params = {
    term: term,
    location: location,
    limit: SEARCH_LIMIT
  }

  response = HTTP.auth("Bearer #{API_KEY}").get(url, params: params)
  response.parse
end

def business(business_id)
  url = "#{API_HOST}#{BUSINESS_PATH}#{business_id}"

  response = HTTP.auth("Bearer #{API_KEY}").get(url)
  response.parse
end

def reviews(business_id)
  url = "#{API_HOST}#{BUSINESS_PATH}#{business_id}/reviews"

  response = HTTP.auth("Bearer #{API_KEY}").get(url)
  response.parse
end

def phone(phone_number)
  url = "#{API_HOST}#{PHONE_PATH}"
  params = {
    phone: phone_number
  }

  response = HTTP.auth("Bearer #{API_KEY}").get(url, params: params)
  response.parse
end

def grabGoogleData(google_id)
  ggdFailure = 0
  begin
  Timeout::timeout(8) do
    finalurl = GOOGLEURL + GOOGLEAUTH + GOOGLEPARAMS + google_id
    return HTTP.get(finalurl).parse["result"]
  end
  rescue Timeout::Error
    ggdFailure += 1
    if ggdFailure < 6
      return grabGoogleData(google_id)
    end
  end
end

# return postal code or A0A0A0
def findPostalCode(response)
  addcoms = response["address_components"]

  addcoms.each do |addcom|
    if addcom["types"] == ["postal_code"]
      return addcom["short_name"]
    end
  end
  return "A0A 0A0"
end

def putIntoYelpDB(id, place)
  trueYelpResponse = business(id)

  puts "Putting " + trueYelpResponse["name"] + " Yelp Data into DB"

  place.update(yelp_id: trueYelpResponse["id"])
  place.update(yelp_url: trueYelpResponse["url"])
  place.update(yelp_phone: trueYelpResponse["phone"])
  place.update(yelp_display_phone: trueYelpResponse["display_phone"])
  place.update(yelp_review_count: trueYelpResponse["review_count"])
  place.update(yelp_rating: trueYelpResponse["rating"])
  place.update(yelp_price: trueYelpResponse["price"])

  trueYelpResponse["categories"].each do |category|
    place.yelp_categories.create!({
      category: category["title"]
    })
  end

  trueYelpResponse["photos"].each do |photo|
    place.yelp_photos.create!({
      url: photo
    })
  end

  if trueYelpResponse.key?("hours")
    trueYelpResponse["hours"][0]["open"].each do |hour|
      place.yelp_opening_hours.create!({
        is_overnight: hour["is_overnight"],
        start: hour["start"],
        end: hour["end"],
        day: hour["day"]
      })
    end
  end

  reviewResponse = reviews(id)

  reviewResponse["reviews"].each do |review|
    place.yelp_reviews.create!({
      review_id: review["id"],
      url: review["url"],
      text: review["text"],
      rating: review["rating"],
      time_made: review["time_created"],
      user_id: review["user"]["id"],
      user_profile: review["user"]["profile_url"],
      user_image: review["user"]["image_url"],
      user_name: review["user"]["name"]
    })
  end
end

options = {}
OptionParser.new do |opts|
  opts.banner = "Example usage: ruby sample.rb (search|lookup) [options]"

  opts.on("-tTERM", "--term=TERM", "Search term (for search)") do |term|
    options[:term] = term
  end

  opts.on("-lLOCATION", "--location=LOCATION", "Search location (for search)") do |location|
    options[:location] = location
  end

  opts.on("-bBUSINESS_ID", "--business-id=BUSINESS_ID", "Business id (for lookup)") do |id|
    options[:business_id] = id
  end

  opts.on("-h", "--help", "Prints this help") do
    puts opts
    exit
  end
end.parse!

location = options.fetch(:location, DEFAULT_LOCATION)

failedYelpMatch = 0
Place.find_each do |plac|
  plum += 1
  puts "Managing Review data call for Place " << plum.to_s << " of " << placeCount

  puts "Google information first..."

  placeid = plac["google_id"]

  googleObj= grabGoogleData(placeid)

  postalCode = ""

  if googleObj.key?("address_components")
    postalCode = findPostalCode(googleObj)
    plac.update(postal_code: postalCode)
  end
  if googleObj.key?("price_level")
    plac.update(google_price_level: googleObj["price_level"])
  end
  if googleObj.key?("international_phone_number")
    plac.update(phone_number: googleObj["international_phone_number"].delete(' ').delete('-'))
  end
  if googleObj.key?("reviews")
    googleObj["reviews"].each do |review|
      plac.google_reviews.create!({
        author_name: review["author_name"],
        author_url: review["author_url"],
        rating: review["rating"],
        relative_time_description: review["relative_time_description"],
        text: review["text"],
        time: review["time"]
      })
    end
  end
  if googleObj.key?("photos")
    googleObj["photos"].each do |photo|
      plac.google_photos.create!({
        height: photo["height"],
        width: photo["width"],
        photo_reference: photo["photo_reference"]
      })
    end
  end
  if googleObj.key?("opening_hours")
    if googleObj["opening_hours"].key?("periods")
      ohPeriods = googleObj["opening_hours"]["periods"]
      ohPeriods.each do |period|
        if period.key?("close")
          plac.google_opening_hours.create!({
            close_day: period["close"]["day"],
            close_time: period["close"]["time"],
            open_day: period["open"]["day"],
            open_time: period["open"]["time"]
          })
        end
      end
    end
  end

  puts "Matching Place with Yelp..."

  notFound = true

  yelpResponse = phone(plac["phone_number"])
  if yelpResponse.key?("total")
    if yelpResponse["total"] > 0
      puts "Matched by Phone Number"
      putIntoYelpDB(yelpResponse["businesses"][0]["id"], plac)
      notFound = false
    end
  end

  if notFound
    term = options.fetch(:term, plac["name"])
    yelpResponse = search(term, location)

    #take Vancouver out of address
    placeAddress = plac["address"][0..-12]
    placeAddress2 = plac["address"][0..-12]
    #turn West into W
    begin
    placeAddress["West"] = "W"
    placeAddress2["West"] = "W"
    rescue
    end
    #turn East into E
    begin
    placeAddress["East"] = "E"
    placeAddress2["East"] = "E"
    rescue
    end
    #test case where they use Street vs St
    begin
    placeAddress["Street"] = "St"
    rescue
    end

    yelpResponse["businesses"].each do |biz|
      if biz["location"]["address1"] == placeAddress
        puts "Matched by Address1"
        notFound = false
        putIntoYelpDB(biz["id"], plac)
        break
      end
      if biz["location"]["address1"] == placeAddress2
        puts "Matched by Address2"
        notFound = false
        putIntoYelpDB(biz["id"], plac)
        break
      end
      if biz["location"]["zip_code"] == postalCode
        puts "Matched by Postal Code"
        notFound = false
        putIntoYelpDB(biz["id"], plac)
        break
      end
    end
    if notFound
      puts "Cannot match for business " << plac.name
      puts "Place Address: " << placeAddress
      puts "Place Address 2: " << placeAddress2
      bnum = 0
      yelpResponse["businesses"].each do |bis|
        bnum += 1
        puts "Biz " << bnum.to_s << " Address: " << bis["location"]["address1"]
      end
      failedYelpMatch += 1
      puts failedYelpMatch.to_s << " failed matches"
    end
  end
end

#Manual database insertions (failed for various reasons)
puts "Manual database insertions..."

putIntoYelpDB("a9P_JDakVrbunkghXHM9ug", Place.where("name LIKE 'Cocorico%'").first)
putIntoYelpDB("s2BLDM9Y6JJ80r8S1tSxcg", Place.where("address LIKE '%Convention%'").first)
putIntoYelpDB("q_IyyuHYcPNo_ZaTj_6R2A", Place.where("name LIKE 'Jammer%'").first)
=end
puts "Hot score generation"

HotScore.destroy_all

placeCount = " 368 something"

plum2 = 0
Place.find_each do |plac|
  plum2 += 1
  puts "Making hot scores for " << plum2.to_s << " of " << placeCount
  PopularTime.where(place_id: plac.id).each do |pt|
    ourHotScore = pt.busy_value * 0.5 + plac.yelp_rating * 5 + plac.rating * 5
    plac.hot_scores.create!({
      day_id: pt["day_id"],
      hour_id: pt["hour_id"],
      hot_score: ourHotScore.round
    })
  end
end

endTime = Time.now
totalTime = endTime - start
puts Place.count.to_s << "Places created"
puts BorderPoint.count.to_s << " BorderPoints created"
puts Neighbourhood.count.to_s << " Neighbourhoods created"
puts "It took " << totalTime.to_s << " seconds to do everything."