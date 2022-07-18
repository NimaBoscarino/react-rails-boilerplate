class Api::ArtistsCategoriesController < ApplicationController
  def index
    @artists_categories = ArtistCategory.all
    render json: @artists_categories
  end
end

