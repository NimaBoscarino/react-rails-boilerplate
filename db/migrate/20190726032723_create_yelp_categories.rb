class CreateYelpCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :yelp_categories do |t|
      t.string :category

      t.timestamps
    end
  end
end
