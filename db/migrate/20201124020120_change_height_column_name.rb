class ChangeHeightColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :users, :height_cm, :height
  end
end
