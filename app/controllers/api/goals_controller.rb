class Api::GoalsController < ApplicationController
  def show
    @goals = Goal.all
    render :json => {
      goals: @goals
    }
  end
end