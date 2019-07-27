class AddGoogleOpeningHourToPlaces < ActiveRecord::Migration[5.2]
  def change
    add_reference :google_opening_hours, :place, index: true, foreign_key:true
  end
end
