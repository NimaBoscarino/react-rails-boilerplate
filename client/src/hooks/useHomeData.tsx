import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import { homeReducer } from '../reducers/homeReducer';

const intialState = {
  allDays:[]
}
export const useHomeData = ():any => {
  
  const [state, dispatch] = useReducer(homeReducer, intialState);

  useEffect(() => {
    axios.get('/api/homes')
      .then(res => {
        dispatch({type:'SET_HOME', allDays:res.data})
      })
      .catch(err => console.log(err))
}, [])
  console.log('..............');

  return state.allDays;
}