class Api::SessionsController < ApplicationController
  def create
    user = User.find_by_email(params[:email])

    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render :json => {
        success: true,
        current_user: user.id,
        first_name: user.first_name
      }
    else
      head(:unauthorized)
    end
  end

  def show
    flag = false
    currentUser = nil
    if session[:user_id]
      flag = true
      currentUser = User.find_by_id(session[:user_id])
    end
    render :json => {
      isLoggedIn: flag,
      currentUser: currentUser}
  end

  def destroy
    session[:user_id] = nil
    render :json => {logged_out: true}
  end

end