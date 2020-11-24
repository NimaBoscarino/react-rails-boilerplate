class Workout < ActiveRecord::Base
 #when using belongs_to tables are singular form
 #when using has_many tables are plural
belongs_to :user
 has_many :routines

 has_many :exercises, through: :routines

end