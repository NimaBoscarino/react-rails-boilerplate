class AddYelpCategoryToPlaces < ActiveRecord::Migration[5.2]
  def change
    add_reference :yelp_categories, :place, index: true, foreign_key:true
  end
end
