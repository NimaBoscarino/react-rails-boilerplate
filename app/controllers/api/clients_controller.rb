class Api::ClientsController < ApplicationController
  
  def index
    @clients = Client.all
      render json: @clients
  end
  
  def create
    @client = Client.new(client_params)
    p "xxxxxxxxx"
    if @client.save
      p "yyyyyyyy"
      p @client
      session[:client_id] = @client.id
      session[:identity] = "client"
      redirect_to '/gallery'
    else
      render json: {error: @client.errors.messages}
      # redirect_to '/register'
    end
  end

  def show
    @client = Client.find(params[:id])
      render json: @client
  end

  def update
    @client = Client.find(params[:id])
    
    if @client.update(client_params)
      render json: @client
    else
      render json: {error: @client.errors.messages}
    end
  end

  def destroy
    @client = Client.find(params[:id])
    if  @client.destroy
      head :no_content
   else
    render json: {error: @artist.errors.messages}
   end
  
  end


  private

def client_params
  params.require(:client).permit(
    :first_name,
    :last_name,
    :email,
    :password,
    # :password_confirmation,
    :phone_number
  )
end
end
