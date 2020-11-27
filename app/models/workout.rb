class Workout < ActiveRecord::Base
 #when using belongs_to tables are singular form
 #when using has_many tables are plural
belongs_to :user
has_many :routines

has_many :exercises, through: :routines

has_many :setts, through: :routines

def with_exercises
  {id: id,
  name: workout_name,
   exercises: exercises
  }
end

end