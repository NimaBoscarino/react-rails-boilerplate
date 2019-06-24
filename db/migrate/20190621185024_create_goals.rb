class CreateGoals < ActiveRecord::Migration[5.2]
  def change
    create_table :goals do |t|
      t.string :objective
      t.string :desc
      t.float :cost
      t.boolean :completed
      t.references :charity, foreign_key: true
    end
  end
end
