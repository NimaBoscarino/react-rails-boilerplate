class Api::SettsController < ApplicationController

  def index
    routine = Routine.find(params[:routine_id])
    render json: routine.setts
  end

  def show
    @routine = Routine.find params[:routine_id]
    @sett = @routine.setts.find(params[:id])
    render :json => {
      sett: @sett
    }
  end

  def create
    @routine = Routine.find params[:routine_id]
    @sett = @routine.setts.new(sett_params)
  end

  def update
    @routine = Routine.find params[:routine_id]
    @sett = @routine.setts.find(params[:sett_id])
  end

  def destroy
    @routine = Routine.find params[:routine_id]
    @sett = @routine.setts.find(params[:sett_id])
    @sett.destroy
    render json: routine.setts
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
