class Api::FavoritesController < ApplicationController
  def index
    favorites = Favorite.all
    render json: favorites
    # favorites = Favorite.all.includes(:activities)
    # render json: favorites, include: ['acritities']
  end

  def show
    favorite = Favorite.find_by(user_id: 1)
    render json: favorite
    # render json: FavoriteSerializer.new(favorite, @options).serial
    # render json: favorite, include: ["activity", 'user']
  end
end
