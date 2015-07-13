class CreateContacts < ActiveRecord::Migration
  def up
    create_table :contacts do |t|
      t.string :name
      t.string :surname
      t.string :document

      t.timestamps null: false
    end
  end

  def down
    drop_table :contacts
  end
end
