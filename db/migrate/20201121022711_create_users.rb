class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :customer_name
      t.string :email
      t.string :password
      t.integer :height_cm
      t.integer :weight
    end
  end
end
