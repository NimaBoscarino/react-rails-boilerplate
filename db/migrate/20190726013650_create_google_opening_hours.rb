class CreateGoogleOpeningHours < ActiveRecord::Migration[5.2]
  def change
    create_table :google_opening_hours do |t|
      t.integer :open_day
      t.string :open_time
      t.integer :close_day
      t.string :close_time

      t.timestamps
    end
  end
end
