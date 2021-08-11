class Api::ArtistsController < ApplicationController
  def index
    @artists = Artist.all
    #  artists = []
    # @artists.each do |artist|
    #   artistHash = artist[:id] 
    #   artistHash = { }
    #   @artistReviews = Review.artistreview(artist[:id])
    #   ids = []
    # @artistReviews.each do |rev| ids.push rev[:id] end
    
    #   artistHash["reviews"] = ids
    #   artists.push artistHash
    # end
    render json: @artists
  end

  def create
    @artist = Artist.new(artist_params)
    if @artist.save
      p @artist
      p "aaaaaaaaa"
      session[:artist_id] = @artist.id
      session[:identity] = "artist"
      # redirect_to '/gallery'
    else
      render json: {error: @artist.errors.messages}
      # redirect_to '/register'
    end
  end

  def show
    @artist = Artist.find(params[:id])
      render json: @artist
  end

  def update
    @artist = Artist.find(params[:id])
    
    if @artist.update(artist_params)
      render json: @artist
    else
      render json: {error: @artist.errors.messages}
    end
  end


  def destroy
    @artist = Artist.find(params[:id])
   if @artist.destroy
      head :no_content
   else
    render json: {error: @artist.errors.messages}
   end
  end




  private

  def artist_params
  params.require(:artist).permit(
    :first_name,
    :last_name,
    :email,
    :password,
    # :password_confirmation,
    :phone_number
  )
  end

end
