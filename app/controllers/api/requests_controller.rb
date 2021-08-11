class Api::RequestsController < ApplicationController
  def index
    @requests = Request.all
      render json: @requests
  end
  
  def create
    @request = Request.new(request_params)
    if @request.save 
      # redirect_to '/gallery'
    else
      p 'this was not saved'
      render json: {error: @request.errors.messages}
      # redirect_to '/create request page'
    end
  end

  def show
    @request = Request.find(params[:id])
      render json: @request
  end

  def update 
    @request = Request.find(params[:id])
    if @request.update(request_params)
      render json: @request
    else
      render json: {error: @request.errors.messages}
    end
  end


  def destroy
    @request = Request.find params[:id]
    if @request.destroy
      head :no_content
    else 
      render json: {error: @request.errors.messages}
    end
  end

  private 
  def request_params
    params.require(:request).permit(
      :name, 
      :description,
      :start_date,
      :expected_finish_date,
      :actual_finish_date,
      :price,
      :client_id,
      :artist_id,
      :category_id,
      :image
    )
  end
end
