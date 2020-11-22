class AddForceToExercises < ActiveRecord::Migration[5.2]
  def change
    add_column :exercises, :force, :string
  end
end
