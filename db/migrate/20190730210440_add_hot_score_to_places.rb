class AddHotScoreToPlaces < ActiveRecord::Migration[5.2]
  def change
    add_reference :hot_scores, :place, index: true, foreign_key:true
  end
end
