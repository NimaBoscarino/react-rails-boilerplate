class User < ApplicationRecord
  has_many :bookings
  has_many :favorites
  has_many :activities, through: :bookings
end
