class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.string :title
      t.string :content
      t.belongs_to :client, foreign_key: true
      t.belongs_to :request, foreign_key: true

      t.timestamps
    end
  end
end
