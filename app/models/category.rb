class Category < ApplicationRecord
  has_many :artists, through: :artist_categories
end
