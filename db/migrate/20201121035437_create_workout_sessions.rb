class CreateWorkoutSessions < ActiveRecord::Migration[5.2]
  def change
    create_table :workout_sessions do |t|
      t.integer :user_id
      t.date :workout_date
    end
  end
end
