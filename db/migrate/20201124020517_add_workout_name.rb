class AddWorkoutName < ActiveRecord::Migration[5.2]
  def change
    add_column :workouts, :workout_name, :string
  end
end
