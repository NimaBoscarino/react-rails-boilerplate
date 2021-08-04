class Api::ReviewsController < ApplicationController
  def index
    @reviews = Review.all
      render json: @reviews
  end

  def create
    @review = Review.new(review_params)
    if @review.save 
      render json: @review
    else
      render json: {error: @review.errors.messages}
    end
  end
  def show
    @review = Review.find(params[:id])
      render json: @review
  end

  def update
    @review = Review.find(params[:id])
    
    if @review.update(review_params)
      render json: @review
    else
      render json: {error: @review.errors.messages}
    end
  end

  def destroy
    @review = Review.find(params[:id])
   if @review.destroy
      head :no_content
   else
    render json: {error: @review.errors.messages}
   end
  end

  private

def review_params
  params.require(:review).permit(
    :title,
    :artist_id,
    :star,
    :client_id
  )
end

end
