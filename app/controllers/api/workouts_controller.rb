class Api::WorkoutsController < ApplicationController
  def index
    @workouts = Workout.all
    render json: {workouts: @workouts}
  end

  def create
    @workout = Workout.create(workout_params)
    render json: {workout: @workout}
  end
  
  def show
    @workout = Workout.find params[:id]
    render json: {workout: @workout}
  end

  def add_exercise
    workout = Workout.find(params[:id])
    exercise = Exercise.find(params[:exercise_id])
    #Client side provides exercise_id
    workout.routines.create(exercise_id: exercise.id)
    render json: workout.routines
  end

  def exercises
    workout = Workout.find(params[:id])
    render json: workout.exercises
  end

  private

  def workout_params
    params.require(:workout).permit(
      :user_id,
      :workout_date,
      :workout_name
    )
  end
end