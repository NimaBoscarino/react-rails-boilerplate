class Routine < ActiveRecord::Base
  #when using belongs_to tables are singular form
  belongs_to :workout
  belongs_to :exercise

  has_many :sets
end