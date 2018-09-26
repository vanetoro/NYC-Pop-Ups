class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :name
      t.string :location
      t.date :start_date
      t.date :end_date
      t.string :price
      t.integer :neighborhood_id
      t.timestamps
    end
  end
end
