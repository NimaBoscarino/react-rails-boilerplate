import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import { homeReducer, SET_GOALS, SET_HOME } from '../reducers/homeReducer';

const intialState = {
  allDays:[],
  currentProgress:[]
}
export const useHomeData = () => {
  
  const [state, dispatch] = useReducer(homeReducer, intialState);

  useEffect(() => {
    //gets count of exercises by day
    axios.get('/api/homes')
      .then(res => {
        dispatch({type:'SET_HOME', allDays:res.data})
      })
      .catch(err => console.log(err))
      //gets insight API call to get current one rep maximum
     axios.get("api/insights")
      .then(res => {
        dispatch({type:'SET_HOME', allDays:res.data})
      })
      .catch(err => console.log(err))

}, [])
  console.log('..............');

  return state.allDays;
}