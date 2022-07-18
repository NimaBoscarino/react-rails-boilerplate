class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :title
      t.integer :star
      t.belongs_to :artist, foreign_key: true
      t.belongs_to :client, foreign_key: true

      t.timestamps
    end
  end
end
