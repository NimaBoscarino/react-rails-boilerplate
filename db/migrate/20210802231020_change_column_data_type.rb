class ChangeColumnDataType < ActiveRecord::Migration[5.2]
  def change
    change_column :clients, :phone_number, :string
  end

  
end
