import { State, IWorkoutExercise, IWorkout } from '../types/workoutType';

const SET_WORKOUTS = "SET_WORKOUTS";
const SET_EXERCISES = "SET_EXERCISES";

type Action = 
  | { type: "SET_EXERCISES", exercises: IWorkoutExercise[], workout_id: number }
  | { type: "SET_WORKOUTS", workout: IWorkout }

export const workoutReducer = (state: State, action: Action):State => {
  let workouts = [];
  switch(action.type){
    case SET_EXERCISES:
      workouts = state.workouts.map(workout => {
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
    case SET_WORKOUTS:
      workouts = [...state.workouts];
      workouts.push(action.workout);
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