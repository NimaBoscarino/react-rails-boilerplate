class RemoveNameAndReplace < ActiveRecord::Migration[5.2]
  def change
    rename_column :sets, :user_exercise_for_session_id, :workouts_exercises_id
    rename_table :user_exercises_for_workout, :workouts_exercises
  end
end
