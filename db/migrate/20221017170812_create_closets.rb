class CreateClosets < ActiveRecord::Migration[7.0]
  def change
    create_table :closets do |t|
      t.string :user_id

      t.timestamps
    end
  end
end
