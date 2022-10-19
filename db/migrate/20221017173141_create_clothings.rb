class CreateClothings < ActiveRecord::Migration[7.0]
  def change
    create_table :clothings do |t|
      t.string :clothing_type
      t.string :where_made
      t.string :image
      t.integer :brand_id
      t.integer :manufacturer_id

      t.timestamps
    end
  end
end
