# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# Clear existing records
User.delete_all
Post.delete_all
BookStatus.delete_all

# Create users
user1 = User.create!(name: "User One", email: "userone@example.com", password: "password")
user2 = User.create!(name: "User Two", email: "usertwo@example.com", password: "password")

# Create book statuses
BookStatus.create!(status: "Read", fave_books: true, book_id: "OL43140390M", user_id: user1.id)
BookStatus.create!(status: "Reading", fave_books: false, book_id: "OL31403985M", user_id: user2.id)

# Create posts
Post.create!(rating: 5, review: "Great book!", time_spent: 120, book_id: "OL47181069M", user_id: user1.id)
Post.create!(rating: 4, review: "Interesting read.", time_spent: 80, book_id: "OL46534010M", user_id: user2.id)

# Create friends
Friend.create!(follower_id: user1.id, following_id: user2.id)