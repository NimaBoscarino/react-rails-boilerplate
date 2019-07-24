class AddPlaceToNeighbourhood < ActiveRecord::Migration[5.2]
  def change
    add_reference :places, :neighbourhood, index: true, foreign_key:true
  end
end
