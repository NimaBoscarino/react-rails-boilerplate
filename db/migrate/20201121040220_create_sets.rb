class CreateSets < ActiveRecord::Migration[5.2]
  def change
    create_table :sets do |t|
      t.integer :user_exercise_for_session_id
      t.integer :reps
      t.integer :rpe
      t.integer :weight
    end
  end
end
