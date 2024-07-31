class User < ApplicationRecord
  has_secure_password
  has_many :posts
  has_many :book_statuses
  has_many :followed_friends, class_name: 'Friend', foreign_key: 'follower_id'
  has_many :following_friends, class_name: 'Friend', foreign_key: 'following_id'

  validates :name, presence: true
  validates :email, presence: true, uniqueness: { case_sensitive: false }
  validates :password, presence: true, length: { minimum: 6 }, allow_nil: true

  def self.authenticate_with_credentials(email, password)
      normalized_email = email.strip.downcase
      user = User.find_by(email: normalized_email)
      if user
          user
      else
          nil
      end
  end
end
