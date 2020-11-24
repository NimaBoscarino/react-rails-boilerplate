class ExerciseMuscle < ActiveRecord::Base
  belongs_to :exercise
  belongs_to :muscle
end