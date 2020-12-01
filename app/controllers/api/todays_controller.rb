class Api::TodaysController < ApplicationController
  def index
    date = Time.now.in_time_zone('Pacific Time (US & Canada)').to_date.to_s
    workouts = Workout.where(workout_date: date)
    render json: workouts.map(&:with_exercises)
  end
end