class AddRatingToArtists < ActiveRecord::Migration[5.2]
  def change
    add_column :artists, :rating, :integer
  end
end
