class Places < ActiveRecord::Migration[5.2]
  def change
    create_table :places do |t|
      t.string :google_id
      t.string :name
      t.string :address
      t.float :lat
      t.float :long
      t.float :rating
      t.integer :rating_n
      t.string :phone_number
      t.integer :current_popularity
      t.integer :time_spent_min
      t.integer :time_spent_max

      t.timestamps
    end
  end
end
