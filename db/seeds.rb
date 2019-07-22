# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require_relative 'mount-pleasant-data.rb'
require 'json'

# weird thing with escape characters is that if I add a few more characters to
# the end of a slice, it will do it correctly. This is to get rid of a \n
datamod = @data.concat("ice")
datamod.slice! "\nice"

jsonarr = JSON.parse(datamod)

arrnum = 0

# PopularTime.destroy_all

# jsonarr.each do |obj|
#   toSave = PopularTime.new()
#   if obj.key?("google_id")
#     toSave.google_id = obj["google_id"]
#   end
#   if obj.key?("name")
#     toSave.name = obj["name"]
#   end
#   if obj.key?("address")
#     toSave.address = obj["address"]
#   end
#   if obj.key?("types")
#     toSave.types = obj["types"]
#   end
#   if obj.key?("coordinates")
#     toSave.lat = obj["coordinates"]["lat"]
#     toSave.long = obj["coordinates"]["lng"]
#   end
#   if obj.key?("rating")
#     toSave.rating = obj["rating"]
#   end
#   if obj.key?("rating_n")
#     toSave.rating_n = obj["rating_n"]
#   end
#   #maybe take it out
#   if obj.key?("international_phone_number")
#     toSave.phone_number = obj["phone_number"]
#   end
#   if obj.key?("current_popularity")
#     toSave.current_popularity = obj["current_popularity"]
#   end
#   if obj.key?("populartimes")
#     toSave.populartimes = obj["populartimes"]
#   end
#   if obj.key?("time_wait")
#     toSave.time_wait = obj["time_wait"]
#   end
#   if obj.key?("time_spent")
#     toSave.time_spent_min = obj["time_spent"][0]
#     toSave.time_spent_max = obj["time_spent"][1]
#   end
#   toSave.save
#   arrnum += 1
#   puts arrnum
# end

Place.destroy_all

jsonarr.each do |obj|
  toSave = Place.new()
  if obj.key?("google_id")
    toSave.google_id = obj["google_id"]
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