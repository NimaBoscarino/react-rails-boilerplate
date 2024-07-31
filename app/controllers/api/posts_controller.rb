module Api
  class PostsController < ApplicationController
    def index
      @posts = Post.includes(:user).all
      render json: @posts.to_json(include: :user)
    end

    def show
      @post = Post.includes(:user).find(params[:id])
      render json: @post.to_json(include: :user)
    end

    def create
      @post = Post.new(post_params)
      if @post.save
        render json: @post, status: :created
      else
        render json: @post.errors, status: :unprocessable_entity
      end
    end

    def update
      @post = Post.find(params[:id])
      if @post.update(post_params)
        render json: @post
      else
        render json: @post.errors, status: :unprocessable_entity
      end
    end

    def destroy
      @post = Post.find(params[:id])
      @post.destroy
      head :no_content
    end

    private

    def post_params
      params.require(:post).permit(:rating, :review, :time_spent, :book_id, :user_id)
    end
  end
end

# find out how to return the related records