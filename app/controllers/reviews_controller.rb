class ReviewsController < ApplicationController
  def index
    @reviews = Review.all
  end
end
