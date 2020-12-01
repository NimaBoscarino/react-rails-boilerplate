class Api::MusclesController < ApplicationController
  def index
    @muscles = Muscle.all
    render json: {muscles: @muscles}
  end
end