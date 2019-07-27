class CreateYelpPhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :yelp_photos do |t|
      t.string :url

      t.timestamps
    end
  end
end
