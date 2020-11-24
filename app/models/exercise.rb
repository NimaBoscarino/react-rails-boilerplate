class Exercise < ActiveRecord::Base
  #when using has_many tables are plural
  has_many :routines
  has_many :workouts, through: :routines

  has_many :exercises_muscles
  has_many :exercises, through: :exercises_muscles

end