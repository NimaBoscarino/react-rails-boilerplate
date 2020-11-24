class FixSetsWorkoutExerciseId < ActiveRecord::Migration[5.2]
  def change
    rename_column :sets, :workouts_exercises_id, :workout_exercise_id
  end
end
