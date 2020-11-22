class AddUpperbodyLowerBodyToExercises < ActiveRecord::Migration[5.2]
  def change
    add_column :exercises, :upper_body, :boolean
    add_column :exercises, :lower_body, :boolean
  end
end
