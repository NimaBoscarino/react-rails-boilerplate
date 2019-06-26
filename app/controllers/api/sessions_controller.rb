class Api::SessionsController < ApplicationController
  def create
    user = User.find_by_email(params[:email])

    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render :json => {success: ture}
    else
      head(:unauthorized)
    end
  end

  def show
    render :json => {session: session}
  end

  def destroy
    session[:user_id] = nil
    render :json => {logged_out: true}
  end

end