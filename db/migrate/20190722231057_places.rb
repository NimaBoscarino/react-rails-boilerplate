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
      t.string :postal_code
      t.integer :google_price_level
      t.string :yelp_id
      t.string :yelp_url
      t.string :yelp_phone
      t.string :yelp_display_phone
      t.integer :yelp_review_count
      t.integer :yelp_rating
      t.string :yelp_price
      t.timestamps
    end
  end
end
