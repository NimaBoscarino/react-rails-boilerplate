class Api::ActivitiesController < ApplicationController
  def index
    @activities = Activity.all
    render json: @activities
  end

  def show
    @activity = Activity.find(params[:id])
    render json: @activity
  end
end
