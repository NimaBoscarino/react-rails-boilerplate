class Api::CommentsController < ApplicationController
  def index
    @comments = Comment.all
      render json: @comments
  end

  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render json: @comment
    else
      render json: {error: @comment.errors.messages}
    end
  end

  def show
    @comment = Comment.find(params[:id])
    render json: @comment
  end

  def update
    @comment = Comment.find(params[:id])

    if @comment.update(comment_params)
      render json: @comment
    else
      render json: {error: @comment.errors.messages}
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
   if @comment.destroy
      head :no_content
   else
    render json: {error: @comment.errors.messages}
   end
  end

  private

def comment_params
  params.require(:comment).permit(
    :title,
    :content,
    :request_id,
    :client_id
  )
end
end
