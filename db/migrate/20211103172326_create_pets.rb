class CreatePets < ActiveRecord::Migration[6.1]
  def change
    create_table :pets do |t|
      t.string :name
      t.string :image
      t.integer :love
      t.integer :creator_id
      t.integer :owner_id
      t.boolean :living

      t.timestamps
    end
  end
end
