class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.integer :number_of_participants
      t.integer :price_per_person
      t.references :user, index: true, foreign_key: true
      t.references :activity, index: true, foreign_key: true
      
      t.timestamps
    end
  end
end
