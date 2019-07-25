# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require_relative 'mount-pleasant-data.rb'
require 'json'

start = Time.now

# Seed Neighbourhoods --------------------------------------------------------------------------------------------
puts "Seeding neighbourhoods"

require 'nokogiri'
require 'geocoder'

allfiles = Dir[Rails.root.join("lib", "which-neighbourhood", "neighbourhood-data", "*.kml")]

#puts "Destroying border points..."
#BorderPoint.destroy_all
#puts "Destroying types..."
#Type.destroy_all
#puts "Destroying populartimes"
#PopularTime.destroy_all
#puts "Destroying places..."
#Place.destroy_all
puts "Destroying neighbourhoods..."
Neighbourhood.destroy_all

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

# weird thing with escape characters is that if I add a few more characters to
# the end of a slice, it will do it correctly. This is to get rid of a \n

require Rails.root.join("lib", "which-neighbourhood", "whichNeighbourhood.rb")

datamod = @data.concat("ice")
datamod.slice! "\nice"

jsonarr = JSON.parse(datamod)

arrnum = 0

jsonarr.each do |obj|
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
  arrnum += 1
  puts arrnum
end

endTime = Time.now
totalTime = endTime - start
puts Place.count.to_s << "Places created"
puts BorderPoint.count.to_s << " BorderPoints created"
puts Neighbourhood.count.to_s << " Neighbourhoods created"
puts "It took " << totalTime.to_s << " seconds to do everything."