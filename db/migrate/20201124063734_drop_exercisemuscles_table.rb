class DropExercisemusclesTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :exercisemuscles
  end
end
