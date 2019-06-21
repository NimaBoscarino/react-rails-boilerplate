class CreateDonations < ActiveRecord::Migration[5.2]
  def change
    create_table :donations do |t|
      t.references :charity, foreign_key: true
      t.float :amount
      t.timestamps null: false
    end
  end
end
