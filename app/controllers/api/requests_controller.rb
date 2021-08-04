class Api::RequestsController < ApplicationController
  def index
    @requests = Request.all
      render json: @requests
  end
end
