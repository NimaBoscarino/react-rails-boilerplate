class AddWaitTimeToPlace < ActiveRecord::Migration[5.2]
  def change
    add_reference :time_waits, :place, index: true, foreign_key:true
  end
end
