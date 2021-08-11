# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require_relative '../lib/populator_fix.rb'
# rake db:reset 
# rake db:seed
# bin/rails c
# Client.count 
# Client.all

puts "Starting seeds..."

# puts "Creating categories..."
# cat1 = Category.find_or_create_by! name: 'Painting'
# cat2 = Category.find_or_create_by! name: 'Sculpture'
# cat3 = Category.find_or_create_by! name: 'Illustration'

ArtistCategory.destroy_all
Comment.destroy_all
Review.destroy_all
Request.destroy_all
Client.destroy_all
Artist.destroy_all
Category.destroy_all

# puts "Creating Clients..."
# Client.populate 6 do |c|
#   c.first_name = Faker::Name.first_name
#    c.last_name = Faker::Name.last_name
#    c.email = Faker::Internet.email
#     c.phone_number = Faker::PhoneNumber.cell_phone
#      c.password = Faker::Alphanumeric.alpha(number: 10)
#      c.image = Faker::SlackEmoji.people
#     c.bio = Faker::Lorem.sentence(word_count:5, supplemental: true)
# end
# puts "Creating Artists..."
# Artist.populate 10 do |c|
#   c.first_name = Faker::Name.first_name
#    c.last_name = Faker::Name.last_name
#    c.email = Faker::Internet.email
#     c.phone_number = Faker::PhoneNumber.cell_phone
#      c.password = Faker::Alphanumeric.alpha(number: 10)
#      c.image = Faker::SlackEmoji.people
#     c.bio = Faker::Lorem.sentence(word_count:5, supplemental: true)
# end
# "Fetching all artists"
# artists = Artist.all


# "Fetching all categories"
# categories = Category.all

# "Fetching all clients"
# clients = Client.all

# puts "Creating Artist_Category table..."


# ArtistCategory.populate 10 do |a| 

#     a.artist_id =  artists.sample
#     a.category_id = categories.sample

# end

# puts "Created ArtistCategory"

# Review.populate 10 do |r|
#     r.star = Faker::Number.between(from: 1, to: 5)
#     r.artist_id = artists.sample
#     r.client_id = clients.sample
# end

# "Creating Requests"

# Request.populate 20 do |r|
#   r.name = Faker::Lorem.word
#   r.description = Faker::Lorem.sentence(word_count: 10)

#   r.price = 50
#   r.start_date = DateTime.now
#   r.client_id = clients.sample
#   r.artist_id = artists.sample
#   r.category_id = categories.sample

# end

# "Fetching all requests"
# requests = Request.all

# "Creating Comments"

# Comment.populate 10 do |c|
#     c.title = Faker::Lorem.word
#     c.content = Faker::Lorem.sentence(word_count: 3, supplemental: true)
#     c.client_id = clients.sample
#     c.request_id = requests.sample
# end

Client.create(
  id: 1,
  first_name: "Lun",
  last_name: "Ji",
  email: "Lun@gmail.com",
  password: 12345,
  phone_number: "604-729-0794",
)
Client.create(
  id: 2,
  first_name: "Ji",
  last_name: "Lun",
  email: "Ji@gmail.com",
  password: 12345,
  phone_number: "604-222-2222",
)
Client.create(
  id: 3,
  first_name: "Adam",
  last_name: "Underhill",
  email: "Adam@gmail.com",
  password: 12345,
  phone_number: "604-333-3333",
)
Client.create(
  id: 4,
  first_name: "Senay",
  last_name: "Alema",
  email: "Senay@gmail.com",
  password: 12345,
  phone_number: "604-444-4444",
)

Artist.create(
  id: 1,
  first_name: "Lun",
  last_name: "Ji",
  email: "Lun@gmail.com",
  password: 12345,
  phone_number: "604-729-0794",
)
Artist.create(
  id: 2,
  first_name: "Ji",
  last_name: "Lun",
  email: "Ji@gmail.com",
  password: 12345,
  phone_number: "604-323-0451",
)
Artist.create(
  id: 3,
  first_name: "Jason",
  last_name: "Nice",
  email: "Jason@gmail.com",
  password: 12345,
  phone_number: "778-124-1946",
)
Artist.create(
  id: 4,
  first_name: "Sherily",
  last_name: "Nice",
  email: "Sherily@gmail.com",
  password: 12345,
  phone_number: "225-111-7237",
)
Artist.create(
  id: 5,
  first_name: "Jojo",
  last_name: "Nice",
  email: "Jojo@gmail.com",
  password: 12345,
  phone_number: "125-151-7724",
)
Artist.create(
  id: 6,
  first_name: "James",
  last_name: "Nice",
  email: "James@gmail.com",
  password: 12345,
  phone_number: "225-051-9942",
)

Category.create(
  id: 1,
  name: "Guitar",
)
Category.create(
  id: 2,
  name: "Art",
)
Category.create(
  id: 3,
  name: "HandyCraft"
)

Request.create(
  name: "Golden Guitar",
  image: "https://cdn.mos.cms.futurecdn.net/Ge25ccbyKQ76Et9bBjFnxk-1024-80.jpg.webp",
  description: "5 with the same structure but different color",
  start_date: nil,
  expected_finish_date: "2021-08-31",
  actual_finish_date: nil,
  price: 20,
  client_id: 1,
  artist_id: nil,
  category_id: 1,
)
Request.create(
  name: "Sun and Moon",
  image:
    "https://images.glaciermedia.ca/polopoly_fs/1.24212567.1601479674!/fileImage/httpImage/image.jpg_gen/derivatives/landscape_804/kamloops-art-page-2.jpg",
  description: "urgent request",
  start_date: nil,
  expected_finish_date: "2021-02-01",
  actual_finish_date: nil,
  price: 40,
  client_id: 2,
  artist_id: nil,
  category_id: 2,
)
Request.create(
  name: "Eletronic Guitar",
  image:
    "https://i5.walmartimages.ca/images/Large/655/498/6000200655498.jpg",
  description: "must be loud enough",
  start_date: "2021-01-01",
  expected_finish_date: "2021-02-01",
  actual_finish_date: nil,
  price: 30,
  client_id: 1,
  artist_id: 1,
  category_id: 1,
)
Request.create(
  name: "Silver Guitar",
  image:
    "https://www.takamine.com/templates/default/images/g90.png",
  description: "made by maple wood",
  start_date: nil,
  expected_finish_date: "2021-08-31",
  actual_finish_date: nil,
  price: 20,
  client_id: 1,
  artist_id: 1,
  category_id: 1,
)
Request.create(
  name: "Wooden Guitar",
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVpjMMENqDh1CzrvJrARwvUdl9zSqtPq1dBw&usqp=CAU",
  description: "made by pine wood",
  start_date: nil,
  expected_finish_date: "2021-08-31",
  actual_finish_date: nil,
  price: 20,
  client_id: 1,
  artist_id: 1,
  category_id: 1,
)
Request.create(
  name: "Best Guitar",
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSExP7EcgzcggW5C_rzjKP-8cmshYw3-El36w&usqp=CAU",
  description: "Must be Softwood",
  start_date: "2021-01-01",
  expected_finish_date: "2021-02-01",
  actual_finish_date: "2021-03-01",
  price: 30,
  client_id: 1,
  artist_id: 1,
  category_id: 1,
)
Request.create(
  name: "Softwood Guitar",
  image:
    "https://online.berklee.edu/takenote/wp-content/uploads/2020/07/learn_acoustic_blues_guitar_article_image.jpg",
  description: "made by hardwood",
  start_date: "2021-01-01",
  expected_finish_date: "2021-02-01",
  actual_finish_date: "2021-03-01",
  price: 30,
  client_id: 1,
  artist_id: 1,
  category_id: 1,
)
Request.create(
  name: "Platinum Guitar",
  image:
    "https://ewww.music-lessons.ca/wp-content/uploads/2012/04/Acoustic-Guitar.jpeg?strip=all&lossy=1&quality=90&ssl=1",
  description: "made by maple wood",
  start_date: "2021-01-01",
  expected_finish_date: "2021-02-01",
  actual_finish_date: "2021-03-01",
  price: 30,
  client_id: 1,
  artist_id: 1,
  category_id: 1,
)
Request.create(
  name: "Tide",
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRvCK7jKPos2NjT-elyRA6Jn8crm5VLboElA&usqp=CAU",
  description: "made by maple wood",
  start_date: "2021-01-01",
  expected_finish_date: "2021-02-01",
  actual_finish_date: "2021-03-01",
  price: 30,
  client_id: 1,
  artist_id: 4,
  category_id: 1,
)
Request.create(
  name: "City Tree",
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpQlfxkMaQJFnfWT24bFhhw_7HG4b-7Fo78g&usqp=CAU",
  description: "made by maple wood",
  start_date: "2021-01-01",
  expected_finish_date: "2021-02-01",
  actual_finish_date: "2021-03-01",
  price: 30,
  client_id: 1,
  artist_id: 4,
  category_id: 1,
)
Request.create(
  name: "Fancy Guitar",
  image:
    "https://cdn.shopify.com/s/files/1/3098/9898/products/esp-v-50-blk-ltd-electric-guitar-black-item-type-solid-body-guitars-manufacturer-on-sale-price-250-499-fleet-pro-sound_279_1024x1024@2x.jpg?v=1606346733",
  description: "made by maple wood",
  start_date: "2021-01-01",
  expected_finish_date: "2021-02-01",
  actual_finish_date: "2021-03-01",
  price: 30,
  client_id: 1,
  artist_id: 1,
  category_id: 1,
)
Request.create(
  name: "guitar",
  image:
    "https://www.pictureframesexpress.co.uk/blog/wp-content/uploads/2020/05/7-Tips-to-Finding-Art-Inspiration-Header-1024x649.jpg",
  description: "made by maple wood",
  start_date: "2021-01-01",
  expected_finish_date: "2021-02-01",
  actual_finish_date: "2021-03-01",
  price: 30,
  client_id: 1,
  artist_id: 1,
  category_id: 1,
)
Request.create(
  name: "Art Sculpture",
  image:
    "https://www.metmuseum.org/-/media/images/art/collection-landing-page/collection-highlights/fragment-queen.jpg?as=1&la=en&mh=848&mw=1344&hash=792C7AC097CDFD3D161801517B047CBF",
  description: "made by maple wood",
  start_date: "2021-01-01",
  expected_finish_date: "2021-02-01",
  actual_finish_date: "2021-03-01",
  price: 30,
  client_id: 1,
  artist_id: 4,
  category_id: 1,
)

