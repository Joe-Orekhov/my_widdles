class AddPriceToPets < ActiveRecord::Migration[6.1]
  def change
    add_column :pets, :price, :integer
  end
end
