class Workout_Exercise < ActiveRecord::Base
  belongs_to :workout
  belongs_to :exercise

end