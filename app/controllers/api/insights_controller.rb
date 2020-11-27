class Api::InsightsController < ApplicationController
  def index
    #routine = Routine.all
    #sett = Sett.find_by_weight_and_reps.joins(:workouts, :routines).where(exercise_id: 6)
    exercise = 6
    sett = Sett.find_by_sql("
      select setts.weight, setts.reps, workouts.workout_date 
      from setts 
      join routines on routines.id=setts.routine_id 
      join workouts on workouts.id=routines.workout_id 
      where routines.exercise_id=#{exercise} 
      order by setts.weight desc")

      sett_nick1 = Sett.find_by_sql("
      select workouts.workout_date, max(setts.weight) as max_weight, setts.reps as reps
      from setts
      join routines on routines.id=setts.routine_id
      join workouts on workouts.id=routines.workout_id
      where routines.exercise_id=6
      group by workouts.workout_date, setts.reps
      ")

      sett_nick2_max_weight_by_day= Sett.find_by_sql("
      select workouts.workout_date as date, max(setts.weight) as max_weight
      from setts
      join routines on routines.id=setts.routine_id
      join workouts on workouts.id=routines.workout_id
      where routines.exercise_id=6
      group by workouts.workout_date
      order by date
      ")
      
      sett_nick4 = Sett.find_by_sql("
      select workouts.workout_date, max(setts.weight) as max_weight, max(setts.reps) as reps
      from setts
      join routines on routines.id=setts.routine_id
      join workouts on workouts.id=routines.workout_id
      where routines.exercise_id=6
      group by workouts.workout_date
      ")
# output ^^ == \/\/
      #       workout_date | max_weight | reps
        # --------------+------------+------
        #  2020-11-25   |        155 |   12
        #  2020-12-01   |        175 |   12
        #  2020-11-30   |        165 |   12
        #  2020-11-24   |        155 |   12"

    render json: sett
  end
end