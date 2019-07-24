class CreateBorderPoints < ActiveRecord::Migration[5.2]
  def change
    create_table :border_points do |t|
      t.float :lat
      t.float :long

      t.timestamps
    end
  end
end
