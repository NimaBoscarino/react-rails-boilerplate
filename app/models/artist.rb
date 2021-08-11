class Artist < ApplicationRecord
  has_many :categories, through: :artist_categories
  has_many :reviews
  has_many :requests
  has_many :messages

  # validates :first_name, presence: true
  # validates :last_name, presence: true
  # validates :email, presence: true, uniqueness: {case_sensitive: false}
  # validates :phone_number, presence: true
  # validates :password, presence: true, length: { in: 8..20}
  # validates :password_confirmation, presence: true
  before_validation :remove_whitespace, :only => [:email]
  
  
  def remove_whitespace
    
    self.email = self.email.strip unless self.email.nil?
    
  end

  def self.authenticate_with_credentials(email, password)
    artist = Artist.find_by_email(email)
  
   if artist && artist.authenticate(password)
    artist
   else
   nil
   end
  end

  def artist_reviews
    # return 0 unless reviews.size.positive?

    avg = :reviews.average(:star).to_f.round(2) * 100
    update_column(:rating, avg)
  end

 
end
