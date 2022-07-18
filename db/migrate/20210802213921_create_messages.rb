class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.boolean :client_sender?
      t.string :content
      t.belongs_to :artist, foreign_key: true
      t.belongs_to :client, foreign_key: true

      t.timestamps
    end
  end
end
