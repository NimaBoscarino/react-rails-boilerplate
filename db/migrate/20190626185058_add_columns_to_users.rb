class AddColumnsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :is_admin, :boolean, deafult: false
    add_column :users, :plaid_token, :string
    add_column :users, :stripe_token, :string
    add_column :users, :current_roundup_balance, :float
    add_column :users, :balance_date, :datetime
    add_column :users, :votes, :integer, array: true, default: []
  end
end
