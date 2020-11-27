class Api::CalendarsController < ApplicationController
  def index
    workouts = Workout.all
    render json: workouts.map(&:with_exercises_dates)
  end
end