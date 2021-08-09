# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require_relative '../lib/populator_fix.rb'




puts "Starting seeds..."

puts "Creating categories..."
cat1 = Category.find_or_create_by! name: 'Painting'
cat2 = Category.find_or_create_by! name: 'Sculpture'
cat3 = Category.find_or_create_by! name: 'Illustration'

ArtistCategory.destroy_all
Comment.destroy_all
Review.destroy_all
Request.destroy_all
Client.destroy_all
Artist.destroy_all

puts "Creating Clients..."
Client.populate 6 do |c|
  c.first_name = Faker::Name.first_name
   c.last_name = Faker::Name.last_name
   c.email = Faker::Internet.email
    c.phone_number = Faker::PhoneNumber.cell_phone
     c.password = Faker::Alphanumeric.alpha(number: 10)
     c.image = Faker::SlackEmoji.people
    c.bio = Faker::Lorem.sentence(word_count:5, supplemental: true)
end
puts "Creating Artists..."
Artist.populate 10 do |c|
  c.first_name = Faker::Name.first_name
   c.last_name = Faker::Name.last_name
   c.email = Faker::Internet.email
    c.phone_number = Faker::PhoneNumber.cell_phone
     c.password = Faker::Alphanumeric.alpha(number: 10)
     c.image = Faker::SlackEmoji.people
    c.bio = Faker::Lorem.sentence(word_count:5, supplemental: true)
end
"Fetching all artists"
artists = Artist.all


"Fetching all categories"
categories = Category.all

"Fetching all clients"
clients = Client.all

puts "Creating Artist_Category table..."


ArtistCategory.populate 10 do |a| 

    a.artist_id =  artists.sample
    a.category_id = categories.sample

end

puts "Created ArtistCategory"

Review.populate 10 do |r|
    r.star = Faker::Number.between(from: 1, to: 5)
    r.artist_id = artists.sample
    r.client_id = clients.sample
end

"Creating Requests"

Request.populate 10 do |r|
  r.name = Faker::Lorem.word
  r.description = Faker::Lorem.sentence(word_count: 10)

  r.price = 50
  r.start_date = DateTime.now
  r.client_id = clients.sample
  r.artist_id = artists.sample
  r.category_id = categories.sample

end

"Fetching all requests"
requests = Request.all

"Creating Comments"

Comment.populate 10 do |c|
    c.title = Faker::Lorem.word
    c.content = Faker::Lorem.sentence(word_count: 3, supplemental: true)
    c.client_id = clients.sample
    c.request_id = requests.sample
end

