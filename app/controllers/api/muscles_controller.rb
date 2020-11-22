class Api::MusclesController < ApplicationController
  def index
  # app.get('/farms', (req, res => ) {
  # const templateVars = {....}
  # })
  @muscles = Muscle.all
  # render json: @exercises
  render :json => {
      muscles: @muscles
    }
  end

  # def show
  #     puts params[:id]
  #     @farm = Farm.find(params[:id])
  #     @animals = @farm.animals
  #     render json: @animals
  # end
end