class Api::UsersController < ApplicationController
  def index
    @users = User.all
    puts "users:"
    puts @users
    puts "credentials:"
    puts session[:user_id]

    render :json => {
      users: @users
    }
  end

  def show
    @user = User.find_by_id(sesssoin[:user_id])
    render :json => {
      user: @user
    }
  end

  def create
    @user = User.new(user_params)

    if @user.save
      session[:user_id] = @user.id
      render :json => {
        success: true
      }
    else
      render :json => {message: "account not created"}
    end
  end

  def destroy
    @user = User.where(id: params[:id]).first
    if @user.destroy
      head(:ok)
    else
      head(:unprocessable_entity)
    end
  end

  def edit
    @user = User.find_by_id(session[:user_id])
  end

  def update
    @user = User.find_by_id(session[:user_id])
    @user.update_attributes(user_params)
  end


  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :password, :password_confirmation, :email, :plaid_token, :stripe_token, :current_roundup_balance, :balance_date, :votes)
  end
end
