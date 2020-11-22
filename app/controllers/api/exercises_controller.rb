class Api::ExercisesController < ApplicationController
  def index
  # app.get('/farms', (req, res => ) {
  # const templateVars = {....}
  # })
  @exercises = Exercise.all
  puts "Use Test"
  puts @exercises.inspect
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