class SessionsController < ApplicationController
  def new

  end

<<<<<<< HEAD
  def create_artist
    artist = Artist.find_by_email(params[:email])
    p artist
    if artist && params[:password]
      p "xxxxxxxx"
      session[:artist_id] = artist.id
      session[:identity] = "artist"
      render json: {artist}
      # redirect_to "/gallery"
    else
      render json: {error: @artist.errors.messages}
      # redirect_to "/gallery"
    end
  end

  def create_client
    client = Client.find_by_email(params[:email])
    if client && client = Client.authenticate_with_credentials(params[:email],params[:password])
      session[:client_id] = client.id
      session[:identity] = "client"
      # redirect_to "/"
      redirect_to "/gallery"
    else
      redirect_to "/gallery"
=======
  def create
    
    if client && client = Client.authenticate_with_credentials(params[:email],params[:password])
      session[:client_id] = client.id
      
    else
     
    end
    if artist && artist = Artist.authenticate_with_credentials(params[:email],params[:password])
      session[:artist_id] = artist.id
     
    else
    
>>>>>>> master
    end
  end

  def destroy
    session[:artist_id] = nil
    session[:client_id] = nil
  
  end
end

# jerri@gibson-beahan.net
# dzyplwzuaf