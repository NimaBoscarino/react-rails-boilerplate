class User < ApplicationRecord
  has_many :dashboards
  has_secure_password
end
