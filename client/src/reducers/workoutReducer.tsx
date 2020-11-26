import { State, IWorkoutExercise, IWorkout } from '../types/workoutType';

const SET_WORKOUTS = "SET_WORKOUTS";

type Action = 
  | { type: "SET_WORKOUTS", exercises: IWorkoutExercise[], workout_id: number }

export const workoutReducer = (state: State, action: Action):State => {

  switch(action.type){
    case SET_WORKOUTS:
      const workouts = state.workouts.map(workout => {
        if(workout.id !== action.workout_id){
          return workout
        }
        return {
          ...workout,
          ...action.exercises
        }
      })
      return {
        ...state,
        workouts
      }
    default:
      // this will give you a type error 
      // throw new Error(`Tried to reduce with unsupported action type:  ${action.type}`);
      throw new Error('Tried to reduce with unsupported action type');
  }
}

export { SET_WORKOUTS };