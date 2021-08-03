class SessionsController < ApplicationController
  def new

  end

  def create
    # If the user exists AND the password entered is correct.
    
    if client = Client.authenticate_with_credentials(params[:email],params[:password])
      session[:client_id] = client.id
      redirect_to '/'
    else
      redirect_to 
    end
    if artist = Artist.authenticate_with_credentials(params[:email],params[:password])
      session[:artist_id] = artist.id
      redirect_to '/'
    else
      redirect_to 
    end
  end

  def destroy
    session[:artist_id] = nil
    session[:client_id] = nil
  
  end
end
