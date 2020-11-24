class Exercise < ActiveRecord::Base
  #when using has_many tables are plural
  has_many :workouts_exercises
  has_many :workouts, through: :workouts_exercises

end