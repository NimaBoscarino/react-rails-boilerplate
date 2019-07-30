class CreateHotScores < ActiveRecord::Migration[5.2]
  def change
    create_table :hot_scores do |t|
      t.integer :day_id
      t.integer :hour_id
      t.integer :hot_score

      t.timestamps
    end
  end
end
