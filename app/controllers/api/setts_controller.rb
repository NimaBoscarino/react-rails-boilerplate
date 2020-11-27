class Api::SettsController < ApplicationController

  def index
    routine = Routine.find_by(workout_id: 'workout_id from request body', exercise_id: 'exercise_id from request body')
    render json: routine.setts
  end

  def show
    @routine = Routine.find(routine_params)
    @sett = @routine.setts.find(params[:id])
    render :json => {
      sett: @sett
    }
  end

  def create
    @routine = Routine.find(routine_params)
    @sett = @routine.setts.create(sett_params)
    render json: @routine.setts
  end

  def update
    @routine = Routine.find(routine_params)
    @sett = @routine.setts.find(params[:id])
  end

  def destroy
    @routine = Routine.find(routine_params)
    @sett = @routine.setts.find(params[:id])
    @sett.destroy
    render json: @routine.setts
  end

  private

  def sett_params
    params.require(:sett).permit(
      :reps,
      :rpe,
      :weight
    )
  end
end
