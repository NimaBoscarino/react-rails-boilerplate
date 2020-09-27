class CreateActivities < ActiveRecord::Migration[5.2]
  def change
    create_table :activities do |t|
      t.string :title
      t.text :description
      t.string :image_url
      t.string :city 
      t.string :address
      t.integer :price_per_person
      t.integer :max_number_of_participants
      t.date :date
      t.timestamps
    end
  end
end
