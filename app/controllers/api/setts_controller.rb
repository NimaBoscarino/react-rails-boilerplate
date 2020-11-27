class Api::SettsController < ApplicationController

  def index
    # Post.where("sha LIKE ?", "%#{short_sha}%")
    #routine = Routine.where("routine.workout_id LIKE ?", "%#{workout_id}%").where("routine.exercise_id LIKE ?", "%#{exercise_id}%")
    routine = Routine.includes(:setts).find_by(workout_id: params[:workout_id], exercise_id: params[:exercise_id])
    render json: routine.setts
  end

  def show
    routine = Routine.includes(:setts).find_by(workout_id: params[:workout_id], exercise_id: params[:exercise_id])
    sett = routine.setts.find(params[:id])
    render json: sett
  end

  def create
    routine = Routine.includes(:setts).find_by(workout_id: params[:workout_id], exercise_id: params[:exercise_id])
    sett = routine.setts.create(sett_params)
    render json: routine.setts
  end

  def update
    routine = Routine.includes(:setts).find_by(workout_id: params[:workout_id], exercise_id: params[:exercise_id])
    sett = routine.setts.find(params[:id])
    render json: sett
  end

  def destroy
    routine = Routine.includes(:setts).find_by(workout_id: params[:workout_id], exercise_id: params[:exercise_id])
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
