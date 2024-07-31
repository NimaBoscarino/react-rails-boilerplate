class CreateUsers < ActiveRecord::Migration[7.1]
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.string :email, null: false
      t.string :password_digest, null: false
      t.integer :awards, default: 0
      t.integer :followers, default: 0
      t.integer :following, default: 0
      t.timestamps
    end
    add_index :users, :email, unique: true
  end
end
