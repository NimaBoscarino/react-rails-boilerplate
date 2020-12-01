class Api::ExercisesController < ApplicationController
  def index
    @exercises = Exercise.all
    render json: {exercises: @exercises}
  end

  def show
    @exercise = Exercise.find params[:id]
    render json: {exercise: @exercise}
  end
end