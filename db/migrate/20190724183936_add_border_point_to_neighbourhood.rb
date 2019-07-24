class AddBorderPointToNeighbourhood < ActiveRecord::Migration[5.2]
  def change
    add_reference :border_points, :neighbourhood, index: true, foreign_key:true
  end
end
