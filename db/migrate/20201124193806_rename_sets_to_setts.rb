class RenameSetsToSetts < ActiveRecord::Migration[5.2]
  def change
    rename_table :sets, :setts
  end
end
