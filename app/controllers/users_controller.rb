class UsersController < ApplicationController

  def show 
    if current_user
      render json: current_user, status: :ok
    else 
      render json: { error: "No Active sesson "}, status: :unauthorized
    end
  end

  private 
  def user_params
    params.permit(:usernmae, :password)
  end

end
