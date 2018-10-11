class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :name
<<<<<<< HEAD
      t.string :address
      t.string :description
=======
      t.string :description
      t.string :address
>>>>>>> 81aac647bf6ad473b850a7fd609fd6a2ba44b53e
      t.date :start_date
      t.date :end_date
      t.string :price
      t.integer :neighborhood_id
      t.string :imageUrl
      t.timestamps
    end
  end
end
