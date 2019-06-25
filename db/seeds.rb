# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Seeding Charity Data..."

def open_asset(file_name)
  File.open(Rails.root.join('db', 'charity_images', file_name))
end

# Only run on development (local) instances not on production, etc.
unless Rails.env.development?
  puts "Development seeds only (for now)!"
  exit 0
end


#Charities
puts "Creating Charities..."

Charity.destroy_all

Charity.create!({
  name: 'SickKids Hospital',
  desc: 'Foundation dedicated to youth health research',
  donated_balance: 0,
  image: open_asset('sickKids.png')
})

Charity.create!({
  name: 'Princess Margaret Foundation',
  desc: 'Foundation dedicated to cancer research',
  donated_balance: 0,
  image: open_asset('princessM.png')
})

Charity.create!({
  name: 'Parkinson Canada',
  desc: 'Foundation dedicated to Parkinson research',
  donated_balance: 0,
  image: open_asset('Parkinsons.png')
})

Charity.create!({
  name: 'Habitat for Humanity',
  desc: 'Foundation dedicated to the building of affordable homes to low-income families',
  donated_balance: 0,
  image: open_asset('habitat.png')
})

Charity.create!({
  name: 'Daily Bread Foodbank',
  desc: 'Foundation dedicated to supplying basic food necessities to low-income individuals',
  donated_balance: 0,
  image: open_asset('dailybread.png')
})

##Goals (Testing goals so I only created 2 goals per)

puts "Creating Goals..."

char1 = Charity.find_by name: "SickKids Hospital"
char2 = Charity.find_by name: "Princess Margaret Foundation"
char3 = Charity.find_by name: "Parkinson Canada"
char4 = Charity.find_by name: "Habitat for Humanity"
char5 = Charity.find_by name: "Daily Bread Foodbank"

puts char1

Goal.destroy_all

char1.goals.create!({
  objective: 'Build 3 MRI Scanners',
  desc: 'Building 3 additional MRI Scanners helps reduce the process of wait',
  cost: 20000,
  completed: false
})

char1.goals.create!({
  objective: 'Build a playground',
  desc: 'Building a playground for kids to play in',
  cost: 2000,
  completed: false
})

char2.goals.create!({
  objective: 'Cancer Research',
  desc: 'Hire more researchers to help speed of tests',
  cost: 30000,
  completed: false
})

char2.goals.create!({
  objective: 'New facility equipments',
  desc: 'Acquire more equipments for more accessible tools',
  cost: 3000,
  completed: false
})

char3.goals.create!({
  objective: 'Beta-Testing Facilities',
  desc: 'New tools needed to better testing before launch of new technologies',
  cost: 10000,
  completed: false
})

char3.goals.create!({
  objective: 'More researchers',
  desc: 'Hire more researchers',
  cost: 3000,
  completed: false
})

char4.goals.create!({
  objective: 'More land ownership',
  desc: 'More land meaning more houses can be built',
  cost: 60000,
  completed: false
})

char4.goals.create!({
  objective: 'More materials',
  desc: 'More material allocated to build more houses',
  cost: 30000,
  completed: false
})

char5.goals.create!({
  objective: 'More workers',
  desc: 'More workers can be allocated to get a wider scope of food gathering',
  cost: 20000,
  completed: false
})

puts "Finished seeding"
