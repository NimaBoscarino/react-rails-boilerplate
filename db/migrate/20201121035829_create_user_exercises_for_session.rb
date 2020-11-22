class CreateUserExercisesForSession < ActiveRecord::Migration[5.2]
  def change
    create_table :user_exercises_for_sessions do |t|
      t.integer :workout_session_id
      t.integer :exercise_id
      t.text :workout_notes
    end
  end
end
