class Muscle < ActiveRecord::Base
 has_many :exercises_muscles 
 has_many :exercises, through: :exercises_muscles

end