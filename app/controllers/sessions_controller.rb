class SessionsController < ApplicationController
  def new

  end

  def create
    
    if client && client = Client.authenticate_with_credentials(params[:email],params[:password])
      session[:client_id] = client.id
      
    else
     
    end
    if artist && artist = Artist.authenticate_with_credentials(params[:email],params[:password])
      session[:artist_id] = artist.id
     
    else
    
    end
  end

  def destroy
    session[:artist_id] = nil
    session[:client_id] = nil
  
  end
end
