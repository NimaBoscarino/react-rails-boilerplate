class CreateRequests < ActiveRecord::Migration[5.2]
  def change
    create_table :requests do |t|
      t.string :name
      t.string :image
      t.string :description
      t.date :start_date
      t.date :expected_finish_date
      t.date :actual_finish_date
      t.integer :price
      t.belongs_to :client, foreign_key: true
      t.belongs_to :artist, foreign_key: true
      t.belongs_to :category, foreign_key: true

      t.timestamps
    end
  end
end
