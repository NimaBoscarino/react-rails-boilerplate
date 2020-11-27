class Api::TodaysController < ApplicationController
  def index
    # workout = Workout.find_by(workout_date: Date.today)
    # render json: workout.routines
    date = Date.today.to_s
    # workout = Workout.find_by_sql("select workouts.id as workout_id, workouts.workout_name
    #   from exercises
    #   join routines on routines.exercise_id = exercises.id
    #   join workouts on workouts.id = routines.workout_id
    #   where workouts.workout_date='#{date}'")
    workouts = Workout.where(workout_date: date)
    # exercise = Exercise.find_by_sql("select exercises.exercise_name, exercises.id as exercise_id
    #   from exercises
    #   join routines on routines.exercise_id = exercises.id
    #   join workouts on workouts.id = routines.workout_id
    #   where workouts.workout_date='#{date}'")
    #workout[0].merge!({"exercise" => exercise})
    render json: workouts.map(&:with_exercises)
  end
end