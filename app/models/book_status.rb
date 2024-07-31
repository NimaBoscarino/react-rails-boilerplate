class BookStatus < ApplicationRecord
  belongs_to :user

  validates :status, presence: true
  validates :book_id, presence: true
end
