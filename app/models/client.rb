class Client < ApplicationRecord
  has_many :messages
  has_many :comments
  has_many :requests
  has_many :reviews
end
