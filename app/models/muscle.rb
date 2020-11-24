class Muscle < ActiveRecord::Base
 has_many :exercisemuscles 
 has_many :exercises, through: :exercisemuscles

end