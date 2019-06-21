class CreateCharities < ActiveRecord::Migration[5.2]
  def change
    create_table :charities do |t|
      t.string :name
      t.string :desc
      t.float :donated_balance
      t.string :image
    end
  end
end
