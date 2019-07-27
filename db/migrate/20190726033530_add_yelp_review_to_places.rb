class AddYelpReviewToPlaces < ActiveRecord::Migration[5.2]
  def change
    add_reference :yelp_reviews, :place, index: true, foreign_key:true
  end
end
