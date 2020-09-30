class User < ApplicationRecord
  has_many :bookings, dependent: :destroy
  has_many :favorites, dependent: :destroy
  has_many :activities, through: :bookings
end
