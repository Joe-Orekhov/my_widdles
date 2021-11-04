class AddTransactionsIdToChats < ActiveRecord::Migration[6.1]
  def change
    add_column :chats, :transaction_id, :integer
  end
end
