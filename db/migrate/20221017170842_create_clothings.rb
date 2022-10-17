class CreateClothings < ActiveRecord::Migration[7.0]
  def change
    create_table :clothings do |t|
      t.string :clothing_type
      t.string :brand_id
      t.string :where_made
      t.string :image
      t.string :sus_clothing_id

      t.timestamps
    end
  end
end
