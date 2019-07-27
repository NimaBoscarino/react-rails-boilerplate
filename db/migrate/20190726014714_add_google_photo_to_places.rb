class AddGooglePhotoToPlaces < ActiveRecord::Migration[5.2]
  def change
    add_reference :google_photos, :place, index: true, foreign_key:true
  end
end
