class CreateFavorites < ActiveRecord::Migration[5.2]
  def change
    create_table :favorites do |t|
      t.references :users, index: true, foreign_key: true
      t.references :activities, :favorite, index: true, foreign_key: true
      t.timestamps
    end
  end
end
