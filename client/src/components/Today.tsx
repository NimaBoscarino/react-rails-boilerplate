import React from 'react';
import { useWorkoutData } from '../hooks/useWorkoutData'
import { SET_WORKOUTS } from '../reducers/workoutReducer';
import { WorkoutList } from './WorkoutList';

export const Today = ():JSX.Element => {
  const { state, dispatch } = useWorkoutData();
  console.log(state);

  // dispatch({
  //   type:SET_WORKOUTS,
  //   workout_id:1,
  //   exercises:[]
  // });

  return(
    <>
    <h1>Today</h1>
    <WorkoutList/>
    </>
  )
}