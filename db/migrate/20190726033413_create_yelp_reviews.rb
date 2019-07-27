class CreateYelpReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :yelp_reviews do |t|
      t.string :review_id
      t.string :url
      t.string :text
      t.integer :rating
      t.string :time_made
      t.string :user_id
      t.string :user_profile
      t.string :user_image
      t.string :user_name

      t.timestamps
    end
  end
end
