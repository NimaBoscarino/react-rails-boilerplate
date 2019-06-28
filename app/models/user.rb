class User < ApplicationRecord
  has_secure_password

  # serialize :votes, Array
  # validates :password, presence: true, length: {minimum: 5}, allow_nil: true
  # validates :first_name, presence: true
  # validates :last_name, presence:true
  # validates :email, uniqueness: {:message => "Already Exists!"}
end
