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
        success: true,
        user: @user.id
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
    # puts "hello1"
    admin = User.where(is_admin: true)[0]
    user = User.find_by_id(session[:user_id])
    old_user_votes = user.votes
    admin_votes = admin.votes
    new_admin_votes = admin_votes.zip(old_user_votes).map{|pair| pair.reduce(&:-)}
    user_votes = user_params[:votes]
    puts "new admin votes"
    puts admin_votes
    new_user_votes = user_votes.tr('["]', '').split(',').map(&:to_i)
    new_user_votes.shift()
    new_user_votes.pop()
    puts "new user votes"
    puts new_user_votes
    new_admin_votes = new_admin_votes.zip(new_user_votes).map{|pair| pair.reduce(&:+)}
    puts "new admin votes"
    puts new_admin_votes
    user.update_attributes(user_params)
    admin.votes = new_admin_votes
    admin.save

    render :json => {
      currentUser: user,
      admin: admin
    }

  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :password, :password_confirmation, :email, :plaid_token, :stripe_token, :current_roundup_balance, :balance_date, :votes, :is_admin)
  end

end
