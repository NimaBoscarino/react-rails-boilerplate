class RemoveColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :reviews, :title
  end
end
