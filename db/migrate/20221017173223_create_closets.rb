class CreateClosets < ActiveRecord::Migration[7.0]
  def change
    create_table :closets do |t|
      t.integer :user_id
      t.integer :clothing_id

      t.timestamps
    end
  end
end
