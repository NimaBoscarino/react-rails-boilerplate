import axios from 'axios';
import React, {useEffect, useReducer} from 'react';
import  {exercisesReducer, SET_EXERCISES} from '../reducers/exercisesReducer';

const initialState = {
  exercises: [],
  displayedExercises: []
}
export const useExercisesData = () => {
  const [state, dispatch] = useReducer(exercisesReducer, initialState);

  useEffect(() => {
    axios.get('/api/exercises')
      .then(res => {
        dispatch({type: SET_EXERCISES, exercises: res.data.exercises})
      })
  },[])

  return {state, dispatch}
}