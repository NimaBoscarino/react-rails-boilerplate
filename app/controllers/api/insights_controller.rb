class Api::InsightsController < ApplicationController
  def index
    #routine = Routine.all
    #sett = Sett.find_by_weight_and_reps.joins(:workouts, :routines).where(exercise_id: 6)
    exercise = 6
    #4,6,3
    goals_array = [3,4,6]

    sett = Sett.find_by_sql("
      select setts.weight, setts.reps, workouts.workout_date 
      from setts 
      join routines on routines.id=setts.routine_id 
      join workouts on workouts.id=routines.workout_id 
      where routines.exercise_id=#{exercise} 
      order by setts.weight desc")
      #found_set =Sett.where("exercise_id = ?", params[:goals_array])
      
      found_set = Routine.where(exercise_id: exercise).joins("join setts on setts.routine_id=routines.id").joins("join workouts on workouts.id=routines.workout_id").select("workouts.workout_date, setts.weight, setts.reps")
      #we need to group by largest weight on date
      #date(workouts), weight and reps
      #includes(:routines, :workouts).references(:routines)
      # 
      
      m = Sett.find_by_sql("
      select workouts.workout_date as date, max(setts.weight) as max_weight
      from setts
      join routines on routines.id=setts.routine_id
      join workouts on workouts.id=routines.workout_id
      where routines.exercise_id=#{exercise}
      group by workouts.workout_date
      order by date
      ")
       export= m.map{|obj| Routine.where(setts:{weight: obj.max_weight}).where(workouts:{workout_date: obj.date}).where(exercise_id: exercise).joins("join setts on setts.routine_id=routines.id").joins("join workouts on workouts.id=routines.workout_id").select("workouts.workout_date, setts.weight, setts.reps")}
        # returns array of objects, max weight by date
    #    [
    #     {
    #         "id": null,
    #         "workout_date": "2020-11-24",
    #         "weight": 155,
    #         "reps": 10
    #     },
    #     {
    #         "id": null,
    #         "workout_date": "2020-11-25",
    #         "weight": 155,
    #         "reps": 10
    #     },
    #     {
    #         "id": null,
    #         "workout_date": "2020-11-30",
    #         "weight": 165,
    #         "reps": 8
    #     },
    #     {
    #         "id": null,
    #         "workout_date": "2020-12-01",
    #         "weight": 175,
    #         "reps": 6
    #     }
    # ]
      sett_nick1 = Sett.find_by_sql("
      select workouts.workout_date, max(setts.weight) as max_weight, setts.reps as reps
      from setts
      join routines on routines.id=setts.routine_id
      join workouts on workouts.id=routines.workout_id
      where routines.exercise_id=6
      group by workouts.workout_date, setts.reps
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

    render json: export.flatten
  end
end