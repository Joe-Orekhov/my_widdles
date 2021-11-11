class AddNamesToChats < ActiveRecord::Migration[6.1]
  def change
    add_column :chats, :seller_name, :string
    add_column :chats, :buyer_name, :string
  end
end
