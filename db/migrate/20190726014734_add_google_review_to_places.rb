class AddGoogleReviewToPlaces < ActiveRecord::Migration[5.2]
  def change
    add_reference :google_reviews, :place, index: true, foreign_key:true
  end
end
