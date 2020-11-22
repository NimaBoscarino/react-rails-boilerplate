class AddMusclegroupToMuscle < ActiveRecord::Migration[5.2]
  def change
    add_column :muscles, :muscle_group, :string
  end
end
