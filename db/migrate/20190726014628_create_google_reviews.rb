class CreateGoogleReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :google_reviews do |t|
      t.string :author_name
      t.string :author_url
      t.integer :rating
      t.string :relative_time_description
      t.string :text
      t.integer :time

      t.timestamps
    end
  end
end
