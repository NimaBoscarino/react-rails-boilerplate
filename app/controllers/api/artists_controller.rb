class Api::ArtistsController < ApplicationController
  def index
    @artists = Artist.all
    render json: @artists
  end

  def create
    @artist = Artist.new(client_params)
  end




  private

def client_params
  params.require(:artist).permit(
    :first_name,
    :last_name,
    :email,
    :password,
    :password_confirmation,
    :phone_number
  )
end
end
