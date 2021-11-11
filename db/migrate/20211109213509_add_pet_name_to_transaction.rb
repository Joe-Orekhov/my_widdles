class AddPetNameToTransaction < ActiveRecord::Migration[6.1]
  def change
    add_column :transactions, :pet_name, :string
  end
end
