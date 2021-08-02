class Request < ApplicationRecord
  belongs_to :client
  belongs_to :artist
  belongs_to :category
end
