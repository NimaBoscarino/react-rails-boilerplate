class Api::CategoriesController < ApplicationController
  def index
    @categories = Category.all
    render json: @categories
  end

  def create
    @category = Category.new(category_params)
    if @category.save
      render json: @category

    else
      render json: {error: @category.errors.messages}

    end
  end

  def show
    @category = Category.find params[:id]
    render json: @category
  end

  def update
    @category = Category.find(params[:id])
    
    if @category.update(category_params)
      render json: @category
    else
      render json: {error: @category.errors.messages}
    end
  end

  def delete
    @category = Category.find params[:id]

    if @category.destory
      head :no_content
    else
      render json: json: {error: @category.errors.messages}
    end
  end

  private

def category_params
  params.require(:category).permit(
    :name
  )
end
  

end
