class Api::SettsController < ApplicationController
  def index
    routine = Routine.find_by(workout_id: params[:workout_id], exercise_id: params[:exercise_id])
    render json: routine.setts
  end

  def show
    routine = Routine.find_by(workout_id: params[:workout_id], exercise_id: params[:exercise_id])
    sett = routine.setts.find(params[:id])
    render json: sett
  end

  def create
    routine = Routine.find_by(workout_id: params[:workout_id], exercise_id: params[:exercise_id])
    sett = routine.setts.create(sett_params)
    render json: routine.setts
  end

  def update
    routine = Routine.find_by(workout_id: params[:workout_id], exercise_id: params[:exercise_id])
    sett = routine.setts.find(params[:id])
    sett.reps = sett_params[:reps]
    sett.rpe = sett_params[:rpe]
    sett.weight = sett_params[:weight]
    sett.save
    render json: routine.setts
  end

  def destroy
    routine = Routine.find_by(workout_id: params[:workout_id], exercise_id: params[:exercise_id])
    sett = routine.setts.find(params[:id])
    sett.destroy
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
