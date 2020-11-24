class Exercise_Muscle < ActiveRecord::Base
  belongs_to :exercise
  belongs_to :muscle
end