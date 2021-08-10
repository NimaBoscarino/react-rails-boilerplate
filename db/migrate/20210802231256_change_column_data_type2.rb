class ChangeColumnDataType2 < ActiveRecord::Migration[5.2]
  def change
    change_column :artists, :phone_number, :string
  end
end
