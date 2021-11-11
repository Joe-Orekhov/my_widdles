class AddOthernameToTransaction < ActiveRecord::Migration[6.1]
  def change
    add_column :transactions, :other_username, :string
  end
end
