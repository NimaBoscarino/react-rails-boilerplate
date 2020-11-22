class Api::ExercisesController < ApplicationController
  def index
  # app.get('/farms', (req, res => ) {
  # const templateVars = {....}
  # })
  @exercises = Exercise.all
  # render json: @exercises
  render :json => {
      exercises: @exercises
    }
  end

  # def show
  #     puts params[:id]
  #     @farm = Farm.find(params[:id])
  #     @animals = @farm.animals
  #     render json: @animals
  # end
end