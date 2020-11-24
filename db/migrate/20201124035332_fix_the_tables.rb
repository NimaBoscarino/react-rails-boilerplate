class FixTheTables < ActiveRecord::Migration[5.2]
  def change
    rename_table :workouts_exercises, :routines
  end
end
