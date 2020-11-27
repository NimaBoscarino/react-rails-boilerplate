class Workout < ActiveRecord::Base
 #when using belongs_to tables are singular form
 #when using has_many tables are plural
belongs_to :user
has_many :routines

has_many :exercises, through: :routines

def with_exercises
  {id: id,
    name: workout_name,
    exercises: exercises
  }
end

def with_exercises_dates
  {id: id,
    date: workout_date,
    name: workout_name,
    exercises: exercises
  }
end

end