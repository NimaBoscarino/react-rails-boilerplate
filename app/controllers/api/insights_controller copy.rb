class Api::InsightsController < ApplicationController
  def index
    #routine = Routine.all
    #sett = Sett.find_by_weight_and_reps.joins(:workouts, :routines).where(exercise_id: 6)
    sett = Sett.find_by_sql("select setts.weight, setts.reps, workouts.workout_date from setts join routines on routines.id=setts.routine_id join workouts on workouts.id=routines.workout_id where routines.exercise_id=6 order by setts.weight desc")
    render json: sett
  end
end