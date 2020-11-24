import React, {useEffect, useReducer} from 'react';
import  {exercisesReducer, SET_EXERCISES} from '../reducers/exercisesReducer';

const initialState = {
  exercises: []
}
export const useApplicationData = () => {
  const [state, dispatch] = useReducer(exercisesReducer, initialState);

  return {state}
}