class Workout < ActiveRecord::Base
 belongs_to :user
 has_many :workouts_exercises

 has_many :exercises, through: :workouts_exercises

end