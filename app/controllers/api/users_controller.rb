class Api::UsersController < ApplicationController
  def index
    @users = User.all.includes([:bookings, :favorites])
    render json: @users, include: ['bookings', 'favorites']
  end
  
  def show
    @user = User.find_by(id: params[:id])
    render json: @user
  end
  

end
