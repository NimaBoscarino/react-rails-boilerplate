class CreateHotScores < ActiveRecord::Migration[5.2]
  def change
    create_table :hot_scores do |t|
      t.string :day_id
      t.string :hour_id
      t.string :hot_score

      t.timestamps
    end
  end
end
