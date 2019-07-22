class AddReferencePopularTimes < ActiveRecord::Migration[5.2]
  def change
    add_reference :popular_times, :place, index: true, foreign_key:true
  end
end
