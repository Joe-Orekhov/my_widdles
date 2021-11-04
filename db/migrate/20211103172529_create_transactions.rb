class CreateTransactions < ActiveRecord::Migration[6.1]
  def change
    create_table :transactions do |t|
      t.integer :pet_id
      t.integer :buyer_id
      t.integer :seller_id
      t.integer :price

      t.timestamps
    end
  end
end
