class Api::WorkoutsController < ApplicationController

  def index
    @workouts = Workout.all
    render :json => {
      workouts: @workouts
    }
  end

  def new
    @workout = Workout.new
  end

  def create
    @workout = Workout.new(workout_params)

    if @workout.save
      redirect_to [:workouts, :show], notice: 'Workout created!'
    else
      redirect_to [:workouts, :new]
    end
  end
  
  def show
    @workout = Workout.find params[:id]
    render :json => {
      workout: @workout
    }
  end

  def add_exercise
    #workout = current_user.workouts.find(params[:id])
    workout = Workout.find(params[:id])
    exercise = Exercise.find(params[:exercise_id])
    #Client side provides exercise_id
    workout.routines.create(exercise_id: exercise.id)
    render json: workout.routines
  end

  # def remove_exercise
  #   workout = Workout.find(params[:id])
  #   #exercise = Exercise.find(params[:exercise_id])
  #   routine = workout.routines.find(params[:routine_id])
  #   routine.destroy
  #   render json: workout.routines
  #   #redirect_to [:workouts]
  # end

  def exercises
    workout = Workout.find(params[:id])
    render json: workout.exercises
  end

  private

  def workout_params
    params.require(:workout).permit(
      :user_id,
      :workout_date,
      :workout_name
    )
  end

end