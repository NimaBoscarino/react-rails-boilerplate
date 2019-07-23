class CreateTimeWaits < ActiveRecord::Migration[5.2]
  def change
    create_table :time_waits do |t|
      t.integer :day_id
      t.integer :hour_id
      t.integer :wait_minutes
      t.timestamps
    end
  end
end
