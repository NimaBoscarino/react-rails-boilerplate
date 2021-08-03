class Client < ApplicationRecord
  has_many :messages
  has_many :comments
  has_many :requests
  has_many :reviews

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true, uniqueness: {case_sensitive: false}
  validates :phone_number, presence: true
  validates :password, presence: true, length: { in: 8..20}
  validates :password_confirmation, presence: true
  before_validation :remove_whitespace, :only => [:email]
  
  
  def remove_whitespace
    

    self.email = self.email.strip unless self.email.nil?
    
  end
  
  def self.authenticate_with_credentials(email, password)
    client = Client.find_by_email(email)
  
   if client && client.authenticate(password)
    client
   else
   nil
   end
  end
end
