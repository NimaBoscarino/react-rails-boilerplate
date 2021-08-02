class Comment < ApplicationRecord
  belongs_to :client
  belongs_to :request
end
