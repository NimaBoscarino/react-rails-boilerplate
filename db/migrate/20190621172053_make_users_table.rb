class MakeUsersTable < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :password_digest
      t.text :plaid_token
      t.text :stripe_token
      t.float :balance
      t.date :balance_date
      t.integer :votes, array: true, default: []
    end
  end
end
