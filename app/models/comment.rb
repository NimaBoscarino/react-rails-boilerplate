class Comment < ApplicationRecord
  belongs_to :client
  belongs_to :request
  
  def self.requestComment(request_id)
    comments = Comment.where(request_id: request_id)
  end
end
