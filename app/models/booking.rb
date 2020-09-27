class Booking < ApplicationRecord
  belongs_to :user
  has_one :activity
end
