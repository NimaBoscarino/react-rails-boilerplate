class Api::ClientsController < ApplicationController
  
  def index
    @clients = Client.all
      render :json => {
        message: @clients
      }
  end

  def create
    @client = Client.new(client_params)
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
