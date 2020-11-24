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

  def show
    @exercise = Exercise.find params[:id]
    render :json => {
      exercise: @exercise
    }
  end
end