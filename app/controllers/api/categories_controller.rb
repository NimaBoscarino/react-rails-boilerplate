class Api::CategoriesController < ApplicationController
  def index
    @categories = Category.all
    render json: @categories
  end
  

end
