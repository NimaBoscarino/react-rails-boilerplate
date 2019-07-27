class AddYelpOpeningHourToPlaces < ActiveRecord::Migration[5.2]
  def change
    add_reference :yelp_opening_hours, :place, index: true, foreign_key:true
  end
end
