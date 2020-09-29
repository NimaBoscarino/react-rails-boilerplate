class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :password
  
  has_many :bookings
  has_many :favorites
  has_many :users, through: :bookings
end
