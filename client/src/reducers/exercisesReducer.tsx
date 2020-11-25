import {IExercise, State} from '../types/exercisesType';

const SET_EXERCISES = "SET_EXERCISES";
const SET_DISPLAYEDEXERCISES = "SET_DISPLAYEDEXERCISES";

type Action = 
  | { type: "SET_EXERCISES", exercises: IExercise[] }
  | { type: "SET_DISPLAYEDEXERCISES", displayedExercises: IExercise[] }

export const exercisesReducer = (state: State, action: Action):State => {

  switch(action.type){
    case SET_EXERCISES:
      return{
        ...state,
        exercises: action.exercises,
      }
    case SET_DISPLAYEDEXERCISES:
      return{
        ...state,
        displayedExercises: action.displayedExercises
      }
    default:
      // this will give you a type error 
      // throw new Error(`Tried to reduce with unsupported action type:  ${action.type}`);
      throw new Error('Tried to reduce with unsupported action type');
  }
}

export {SET_EXERCISES, SET_DISPLAYEDEXERCISES };