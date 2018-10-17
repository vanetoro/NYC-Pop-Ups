class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :name
      t.string :address
      t.string :description
      t.date :start_date
      t.date :end_date
      t.string :price
      t.integer :neighborhood_id
      t.string :imageUrl
      t.integer :counter
      t.timestamps
    end
  end
end
