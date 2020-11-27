import axios from 'axios';
import React, {useEffect, useReducer} from 'react';
import  { SET_WORKOUTS, workoutReducer } from '../reducers/workoutReducer';

const initialState = {
  user_id : 1,
  workouts : []
}
export const useWorkoutData = () => {
  const [state, dispatch] = useReducer(workoutReducer, initialState);
  
  // should fetch all workouts and update state
  // useEffect(() => {
  //   axios.get('api/workouts', {

  //   })
  // },[])
  return {state, dispatch}
}