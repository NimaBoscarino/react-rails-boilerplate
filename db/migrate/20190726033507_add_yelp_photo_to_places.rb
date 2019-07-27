class AddYelpPhotoToPlaces < ActiveRecord::Migration[5.2]
  def change
    add_reference :yelp_photos, :place, index: true, foreign_key:true
  end
end
