class CreatePosts < ActiveRecord::Migration[7.1]
  def change
    create_table :posts do |t|
      t.integer :rating, null: false
      t.string :review
      t.integer :time_spent
      t.integer :book_id, null:false
      
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
