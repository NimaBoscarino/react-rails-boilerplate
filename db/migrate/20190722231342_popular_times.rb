class PopularTimes < ActiveRecord::Migration[5.2]
  def change
    create_table :popular_times do |t|
      t.integer :day_id
      t.integer :hour_id
      t.integer :busy_value

      t.timestamps
    end
  end
end
