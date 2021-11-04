class SessionsController < ApplicationController

  def create
    user = User.find_by_username(params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :ok
    else 
      render json: {error: 'No active sesson' }, status: :unauthorized
    end

  end

end
