class Api::FavoritesController < ApplicationController
  def index
    favorites = Favorite.where(user_id: 1)
    render json: favorites
  end

  def show
    favorite = Favorite.where(user_id: 1)
    render json: favorite
  end

  def create
  end
  
  def destroy
  end

end
