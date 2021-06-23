class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.string :name
      t.float :price
      t.text :description
      t.string :trailer
      t.date :realese_date

      t.timestamps
    end
  end
end
