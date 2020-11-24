class UpdateLastInstanceOfSession < ActiveRecord::Migration[5.2]
  def change
    rename_column :workouts_exercises, :workout_session_id, :workout_id
  end
end
