class CreateFavorites < ActiveRecord::Migration[5.2]
  def change
    create_table :favorites do |t|
      t.references :user,index: true, foreign_key:true
      t.references :activity,index: true, foreign_key:true
      t.timestamps
    end
  end
end