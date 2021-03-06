class ChatsController < ApplicationController

  def send_message 
    created_chat = Chat.create(transaction_id: params[:transaction_id], message: params[:message], sender_username: params[:sender_username])
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
