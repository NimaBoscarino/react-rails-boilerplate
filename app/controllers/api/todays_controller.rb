class Api::TodaysController < ApplicationController
  def index
    workout = Workout.find_by(workout_date: Date.today)
    render json: workout.exercises
  end
end