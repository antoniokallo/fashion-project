class CreateSusClothings < ActiveRecord::Migration[7.0]
  def change
    create_table :sus_clothings do |t|
      t.string :storename
      t.string :location
      t.string :sustainability
      t.string :image

      t.timestamps
    end
  end
end
