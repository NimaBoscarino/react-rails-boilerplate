class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :image_url, :city, :address, :price_per_person, :max_number_of_participants, :date

  has_many :bookings
  has_many :favorites
  # has_many :users, through: :bookings
end
