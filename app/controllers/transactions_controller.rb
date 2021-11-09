class TransactionsController < ApplicationController


  def user_chat
    users_transactions = Transaction.where(buyer_id: current_user.id).or(Transaction.where(seller_id: current_user.id))
    if !!users_transactions
      render json: users_transactions, status: :ok
    else
      render json: {error: 'User has no Transactions'}, status: :not_found
    end
  end


  def create_chat
    found_transaction = Transaction.find_by(pet_id: params[:pet_id], buyer_id: current_user.id)
    if !found_transaction
      other_username = User.where(id: params[:creator_id])
      pet_name = Pet.where(id: params[:pet_id])
      new_transaction = Transaction.create(pet_id: params[:pet_id], buyer_id: current_user.id, seller_id: params[:creator_id], price: params[:price], other_username: other_username[0].username, pet_name: pet_name[0].name)
        if !!new_transaction
          render json: new_transaction, status: :created
        else
          render json: { error: new_transaction.errors.full_messages}, status: :unprocessable_entity
        end

    else
      render json: { error: 'Transaction exists'}, status: :unprocessable_entity
    end
  end

end
