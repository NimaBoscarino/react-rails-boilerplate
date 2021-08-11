class Request < ApplicationRecord
  belongs_to :client
  belongs_to :category

  validates :name, presence: true
  validates :description, presence: true
  validates :price, presence: true

  


  def finish_date_validation
    if expected_finish_date.present? && expected_finish_date < Date.now
      errors.add(:expected_finish_date, "can't be in the past")
    end
  end
end
