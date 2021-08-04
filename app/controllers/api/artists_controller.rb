class Api::ArtistsController < ApplicationController
  def index
    @artists = Artist.all
    render json: @artists
  end

  def create
    @artist = Artist.new(artist_params)
    if @artist.save
      session[:artist_id] = @artist.id
      
    else
      
    end
  end

  def destroy
    @artist = Artist.find(params[:id])
    @artist.destroy
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
