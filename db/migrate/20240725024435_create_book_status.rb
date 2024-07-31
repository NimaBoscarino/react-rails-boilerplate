class CreateBookStatus < ActiveRecord::Migration[7.1]
  def change
    create_table :book_statuses do |t|
      t.string :status, null: false
      t.boolean :fave_books, default: false
      t.string :book_id, null: false

      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
