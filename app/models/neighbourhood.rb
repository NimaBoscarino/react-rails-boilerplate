class Neighbourhood < ApplicationRecord
  has_many :places, dependent: :destroy
  has_many :border_points, dependent: :destroy
end
