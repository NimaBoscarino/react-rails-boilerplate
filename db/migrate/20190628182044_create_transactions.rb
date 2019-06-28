class CreateTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :transactions do |t|
      t.text :name
      t.decimal :amount
      t.date :date
      t.text :category
      t.string :category_id
      t.references :item, foreign_key: true
      t.timestamps
    end
  end
end
