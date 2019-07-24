class CreateNeighbourhoods < ActiveRecord::Migration[5.2]
  def change
    create_table :neighbourhoods do |t|
      t.string :name
      t.float :centerlat
      t.float :centerlong

      t.timestamps
    end
  end
end
