import React, { useState } from 'react';
import { ExerciseList } from './ExerciseList';
import { SearchBar } from '../SearchBar';
import { useExercisesData } from '../../hooks/useExercisesData';
import { Dialog } from '@material-ui/core';
import { Alerts } from '../Alert';

export const NewWorkout = (props:any):React.ReactElement => {
  const { state, dispatch } = useExercisesData();
  const [successAlert, setSuccessAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);

  console.log('newWorkout');

  console.log(props.location.state ? props.location.state.workoutID : 'no workout id yet');

  const onSuccessChange = () => {
    setSuccessAlert(!successAlert);
  }

  const onErrorChange = () => {
    setErrorAlert(!errorAlert);
  }

  const filterExercises = (value: string) => {
    if(!value) {
      const displayedExercises = state.exercises;
      dispatch({type:'SET_DISPLAYEDEXERCISES', displayedExercises})
    }
    const displayedExercises = state.exercises.filter(exercise => exercise.exercise_name.toLowerCase().includes(value))

    dispatch({type:'SET_DISPLAYEDEXERCISES', displayedExercises})
  }

  return(
    <>
      <SearchBar onChange={ (value:string) => filterExercises(value)}/>
      <Alerts 
        message={"Exercise successfully added to workout!"} 
        open={successAlert}
        onChange={onSuccessChange}
        severity={'info'}
      />
      <Alerts 
        message={"Error! Couldn't add exercise."} 
        open={errorAlert}
        onChange={onErrorChange}
        severity={'error'}
      />
      { state.displayedExercises.length ? 
      <ExerciseList exercises={state.displayedExercises} 
        selectedWorkout={props.location.state ? props.location.state.workoutID : 1000}
        openSuccessAlert={onSuccessChange}
        openErrorAlert={onErrorChange}
        /> :  
      <ExerciseList exercises={state.exercises} 
        selectedWorkout={props.location.state ? props.location.state.workoutID : 1000}
        openSuccessAlert={onSuccessChange}
        openErrorAlert={onErrorChange}
        />}
    </>
  )
}