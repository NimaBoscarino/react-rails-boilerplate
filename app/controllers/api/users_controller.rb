module Api
  class UsersController < ApplicationController
    def index
      @users = User.includes(:posts).all
      render json: @users.to_json(include: :posts)
    end

    def show
      @user = User.includes(:posts).find(params[:id])
      render json: @user.to_json(include: :posts)
    end

    def new
        @user = User.new
    end

    def create
      @user = User.new(user_params)
      if @user.save
        session[:user_id] = @user.id
        render json: @user, status: :created
      else
        render json: @user.errors, status: :unprocessable_entity
      end
    end

    def update
      @user = User.find(params[:id])
      if @user.update(user_params)
        render json: @user
      else
        render json: @user.errors, status: :unprocessable_entity
      end
    end

    def destroy
      @user = User.find(params[:id])
      @user.destroy
      head :no_content
    end

    private

    def user_params
      params.require(:user).permit(:name, :email, :password, :password_confirmation) #removed awards, followers and following
    end
  end
end