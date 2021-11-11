class AddSenderNameToChat < ActiveRecord::Migration[6.1]
  def change
    add_column :chats, :sender_username, :string
  end
end
