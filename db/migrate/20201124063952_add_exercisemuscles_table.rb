class AddExercisemusclesTable < ActiveRecord::Migration[5.2]
  def change
    create_table :exercisemuscles do |t|
      t.integer :exercise_id
      t.integer :muscle_id
    end
  end
end