class User < ActiveRecord::Base
 #when using belongs_to tables are singular form
 #when using has_many tables are plural
  has_many :workouts


end