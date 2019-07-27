class CreateYelpOpeningHours < ActiveRecord::Migration[5.2]
  def change
    create_table :yelp_opening_hours do |t|
      t.boolean :is_overnight
      t.string :start
      t.string :end
      t.integer :day

      t.timestamps
    end
  end
end
