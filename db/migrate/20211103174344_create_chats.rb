class CreateChats < ActiveRecord::Migration[6.1]
  def change
    create_table :chats do |t|
      t.integer :receiver_id
      t.integer :sender_id
      t.string :message

      t.timestamps
    end
  end
end
