class RemoveTransactionIdFromChats < ActiveRecord::Migration[6.1]
  def change
    remove_column :chats, :transaction_id
  end
end
