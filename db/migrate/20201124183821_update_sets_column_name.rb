class UpdateSetsColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :sets, :workout_exercise_id, :routine_id
  end
end
