class Api::InsightsController < ApplicationController
  def index
    #routine = Routine.all
    #sett = Sett.find_by_weight_and_reps.joins(:workouts, :routines).where(exercise_id: 6)
    sett = Sett.find_by_sql("
      select setts.weight, setts.reps, workouts.workout_date 
      from setts 
      join routines on routines.id=setts.routine_id 
      join workouts on workouts.id=routines.workout_id 
      where routines.exercise_id=6 
      order by setts.weight desc")

      sett_nick = Sett.find_by_sql("
      select workouts.workout_date, max(setts.weight) as max_weight, setts.reps as reps
      from setts
      join routines on routines.id=setts.routine_id
      join workouts on workouts.id=routines.workout_id
      where routines.exercise_id=6
      group by workouts.workout_date, setts.reps
      ")
    render json: sett
  end
end
"to get max weight by day
select workouts.workout_date, max(setts.weight) as max_weight
      from setts
      join routines on routines.id=setts.routine_id
      join workouts on workouts.id=routines.workout_id
      where routines.exercise_id=6
      group by workouts.workout_date;





select workouts.workout_date, max(setts.weight) as max_weight, max(setts.reps) as reps
gains_development-#       from setts
gains_development-#       join routines on routines.id=setts.routine_id
gains_development-#       join workouts on workouts.id=routines.workout_id
gains_development-#       where routines.exercise_id=6
gains_development-#       group by workouts.workout_date;
 workout_date | max_weight | reps
--------------+------------+------
 2020-11-25   |        155 |   12
 2020-12-01   |        175 |   12
 2020-11-30   |        165 |   12
 2020-11-24   |        155 |   12"