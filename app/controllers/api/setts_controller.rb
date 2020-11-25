class Api::SettsController < ApplicationController

  def index
    routine = Routine.find(params[:routine_id])
    render json: routine.setts
  end

  def show
    @routine = Routine.find params[:routine_id]
    @sett = @routine.setts.find(params[:sett_id])
    render :json => {
      sett: @sett
    }
  end
end
