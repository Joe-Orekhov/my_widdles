class UsersController < ApplicationController

  def show 
    if current_user
      render json: current_user, status: :ok
    else 
      render json: { error: "No Active sesson "}, status: :unauthorized
    end
  end

  def create
    new_user = User.new(username: params[:username], password: params[:password], money: 1000)
    if new_user.save
      render json: new_user, status: :created
    else 
      render json: { error: new_user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def pet_sold
    
  end

  private 
  def user_params
    params.permit(:usernmae, :password)
  end

end
