class ChangeExerciseMusclesName < ActiveRecord::Migration[5.2]
  def change
    rename_table :exercises_muscles, :exercisemuscles
  end
end
