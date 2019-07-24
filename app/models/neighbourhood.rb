class Neighbourhood < ApplicationRecord
  has_many :places
  has_many :border_points
end
