class Api::SessionController < ApplicationController
  def create
    user = User.find_by_email(params[:email])

    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render :json => {success: true}
    else
      head(:unauthorized)
    end
  end

  def show
    render :json => {isLoggedIn: session[:user_id]}
  end

  def destroy
    session[:user_id] = nil
    render :json => {logged_out: true}
  end

end