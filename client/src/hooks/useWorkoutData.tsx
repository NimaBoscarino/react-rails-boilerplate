import axios from 'axios';
import React, {useEffect, useReducer} from 'react';
import  { SET_WORKOUTS, workoutReducer } from '../reducers/workoutReducer';

const initialState = {
  user_id : 1,
  workouts : []
}
export const useWorkoutData = () => {
  const [state, dispatch] = useReducer(workoutReducer, initialState);
  
  useEffect(() => {
    axios.get('api/todays').then((res) => {
      dispatch({type:SET_WORKOUTS, workouts:res.data});
    })
  },[])
  
  return {state, dispatch}
}