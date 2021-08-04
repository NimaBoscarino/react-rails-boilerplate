class Api::ClientsController < ApplicationController
  
  def index
    @clients = Client.all
      render json: @clients
  end

  def create
    @client = Client.new(client_params)
   
    if @client.save
      session[:client_id] = @client.id
      
    else
      
    end
  end

  def destroy
    @client = Client.find(params[:id])
    @client.destroy
  end


  private

def client_params
  params.require(:client).permit(
    :first_name,
    :last_name,
    :email,
    :password,
    :password_confirmation,
    :phone_number
  )
end
end
