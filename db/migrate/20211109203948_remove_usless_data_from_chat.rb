class RemoveUslessDataFromChat < ActiveRecord::Migration[6.1]
  def change
    remove_column :chats, :receiver_id, :integer
    remove_column :chats, :sender_id, :integer
    remove_column :chats, :seller_name, :string
    remove_column :chats, :buyer_name, :string
  end
end
