class AddTypeToPlaces < ActiveRecord::Migration[5.2]
  def change
    add_reference :types, :place, index: true, foreign_key:true
  end
end
