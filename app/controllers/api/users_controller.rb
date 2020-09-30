class Api::UsersController < ApplicationController
  def index
    @users = User.all.includes(:bookings)
    render json: @users, include: 'bookings'
  end
  
  def show
    @user = User.find_by(id: params[:id])
    render json: @user, include: 'bookings'
  end
  

end
