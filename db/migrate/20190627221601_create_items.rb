class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.text :public_token
      t.text :access_token
      t.text :institution_name
      t.text :institution_id
      t.references :user, foreign_key: true
      t.timestamps
    end
  end
end
