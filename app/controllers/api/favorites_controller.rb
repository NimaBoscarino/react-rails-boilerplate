class Api::FavoritesController < ApplicationController
  def index
    favorites = Favorite.where(user_id: 1)
    render json: favorites
    # favorites = Favorite.all.includes(:activities)
    # render json: favorites, include: ['acritities']
  end

  def show
    favorite = Favorite.where(user_id: 1)
    render json: favorite
    # render json: FavoriteSerializer.new(favorite, @options).serial
    # render json: favorite, include: ["activity", 'user']
  end

  def create
  end
  
  def destroy
  end

end
