class Api::SessionsController < ApplicationController
    def create
      user = User.authenticate_with_credentials(params[:email], params[:password])
    user = current_user
      if user
        session[:user_id] = user.id
        render json: { notice: 'Logged in successfully' }, status: :ok
      else
        render json: { alert: 'Invalid email or password' }, status: :unauthorized
      end
    end
  
    def destroy
      session[:user_id] = nil
      render json: { notice: 'Logged out successfully' }, status: :ok
    end
end
