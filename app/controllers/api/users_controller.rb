class Api::UsersController < ApplicationController

  def index
    #@user = User.find(params[:id])
    @user = User.all
    # render json: @exercises
    render :json => {
        users: @user
    }
  end

  def display_workouts
    user = User.find(params[:id])
    render json: user.workouts
  end

  def create
    user = User.new(user_params)
    if user.save
      session[:user_id] = user.id
      redirect_to '/'
    else
      redirect_to '/signup'
    end  
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end
end