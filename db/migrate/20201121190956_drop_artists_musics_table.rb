class DropArtistsMusicsTable < ActiveRecord::Migration[5.2]

  def up
    drop_table :artists_musics
  end
  def down
    raise ActiveRecord::IrreversibleMigration
  end

  def change
    drop_table :artists_musics do |t|
      t.bigint :artist_id, null: false
      t.bigint :music_id, null: false
      t.index :name, unique: true
    end
  end
end
