class ChatsController < ApplicationController

  def send_message 
    chats_transaction = Transaction.find_by(id: params[:transaction_id])
    buyer = User.find_by(id: chats_transaction.buyer_id)
    seller = User.find_by(id: chats_transaction.seller_id)
    
    created_chat = Chat.create(transaction_id: params[:transaction_id], receiver_id: params[:receiver_id], sender_id: params[:sender_id], message: params[:message], seller_name: seller.username, buyer_name: buyer.username)
      if !!created_chat
        render json: created_chat, status: :ok
      else 
        render json: { error: created_chat.errors.full_messages }, status: :unprocessable_entity
      end
  end

  def get_messages
    transaction_chats = Chat.where(transaction_id: params[:transaction_id])
      if !!transaction_chats
        render json: transaction_chats, status: :ok
      else 
        render json: { error: "No chats found" }, status: :unprocessable_entity
      end
  end


end
