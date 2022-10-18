class CreateBrands < ActiveRecord::Migration[7.0]
  def change
    create_table :brands do |t|
      t.string :brandname
      t.string :manufacturer
      t.string :location
      t.string :full_img
      t.string :image
      t.string :details

      t.timestamps
    end
  end
end
