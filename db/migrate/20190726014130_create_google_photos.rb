class CreateGooglePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :google_photos do |t|
      t.integer :height
      t.integer :width
      t.string :photo_reference

      t.timestamps
    end
  end
end
