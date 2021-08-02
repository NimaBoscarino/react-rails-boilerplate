class Artist < ApplicationRecord
  has_many :categories, through: :artist_categories
  has_many :reviews
  has_many :requests
  has_many :messages
end
