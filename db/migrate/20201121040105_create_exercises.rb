class CreateExercises < ActiveRecord::Migration[5.2]
  def change
    create_table :exercises do |t|
      t.string :exercise_name
      t.text :description
      t.string :video_url
      t.string :thumbnail_image_url
      t.integer :user_id
    end
  end
end
