class Api::ActivitiesController < ApplicationController
  def index
    @activities = Activity.all
    render json: @activities
  end

  def show
    @activity = Activity.find(params[:id])
    render json: @activity
  end

  def user_activities
    activities = Activity.joins(:bookings).where(bookings: {user_id: 1})
    render json: activities
  end
end
