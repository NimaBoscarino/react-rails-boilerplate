class Exercise < ActiveRecord::Base
  #when using has_many tables are plural
  has_many :routines
  has_many :workouts, through: :routines
  has_many :setts, through: :routines

  has_many :exercisemuscles
  has_many :exercises, through: :exercisemuscles

end