module Api
  class FriendsController < ApplicationController
    def index
      @friends = Friend.all
      render json: @friends
    end

    def show
        @friend = Friend.find(params[:id])
        render json: @friend
    end

    def followers
        @followers = User.joins("JOIN friends ON friends.follower_id = users.id")
                         .where("friends.following_id = ?", params[:id])
        render json: @followers
    end

    def following
        @following = User.joins("JOIN friends ON friends.following_id = users.id")
                         .where("friends.following_id = ?", params[:id])
        render json: @following
    end

    def create
      @friend = Friend.new(friend_params)
      if @friend.save
        render json: @friend, status: :created
      else
        render json: @friend.errors, status: :unprocessable_entity
      end
    end

    def update
      @friend = Friend.find(params[:id])
      if @friend.update(friend_params)
        render json: @friend
      else
        render json: @friend.errors, status: :unprocessable_entity
      end
    end

    def destroy
      @friend = Friend.find(params[:id])
      @friend.destroy
      head :no_content
    end

    private

    def friend_params
      params.require(:friend).permit(:follower_id, :following_id)
    end
  end
end