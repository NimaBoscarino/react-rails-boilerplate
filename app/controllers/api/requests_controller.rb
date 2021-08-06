class Api::RequestsController < ApplicationController
  def index
    @requests = Request.all
    # requests = []
    # @requests.each do |request|
    #   requestHash = request[:id] 
    #   requestHash = { }
    #   @requestComments = Comment.requestComment(request[:id])
    #   ids = []
    # @requestComments.each do |r| ids.push r[:id] end
    
    #   requestHash["comments"] = ids
    #   requests.push requestHash
    # end

      render json: @requests
  end
  
  def update 
    @request = Request.find(params[:id])
  end
  
  def create
    @request = Request.new(request_params)

    if @request.save 
      # redirect_to '/gallery'
    else
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
      :expected_finish_date,
      :price,
      :artist_id,
      :client_id,
      :category_id
    )
  end
end
