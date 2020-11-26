class Api::RoutinesController < ApplicationController
  #Routine is selected by workout id and exercise id provided in url
  def destroy
    routine = Routine.where(workout_id: params[:workout_id], exercise_id: params[:id]).first
    render json: {success: !!(routine && routine.destroy)}
  end
  #/api/workouts/:workout_id/remove_exercise/:id(.:format)    
end