import React, { useState } from 'react';
import { ExerciseList } from './ExerciseList';
import { SearchBar } from './SearchBar';
import { useExercisesData } from '../hooks/useExercisesData';
import { Alerts } from './Alert';
import { Title } from './Title';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import '../styles/exercises.scss'

export const Exercises = (props:any):React.ReactElement => {
  const { state, dispatch } = useExercisesData();
  const [successAlert, setSuccessAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const [notFoundAlert, setNoFoundAlert] = useState(false);

  const onSuccessChange = () => {
    setSuccessAlert(!successAlert);
  }

  const onErrorChange = () => {
    setErrorAlert(!errorAlert);
  }

  const onNotFoundChange = () => {
    setNoFoundAlert(!notFoundAlert)
  }

  const filterExercises = (value: string) => {
    setNoFoundAlert(false)
    if(!value) {
      const displayedExercises = state.exercises;
      dispatch({type:'SET_DISPLAYEDEXERCISES', displayedExercises})
      return
    }
    const lowerCaseValue = value.toLowerCase();
    const displayedExercises = state.exercises.filter(exercise => {
   
      return exercise.exercise_name.toLowerCase().includes(lowerCaseValue) || 
        exercise.force.toLowerCase().includes(lowerCaseValue)
    });
    if(!displayedExercises.length) {
      setNoFoundAlert(true)
    }
    dispatch({type:'SET_DISPLAYEDEXERCISES', displayedExercises})
  }

  return(
    <>
      <Title text={'EXERCISES'} />
      <div className='exercise-list-container'>
      <div className='search-bar-container'>
        <SearchOutlinedIcon /> 
        <SearchBar onChange={ (value:string) => filterExercises(value)}/>
      </div>
      <Alerts 
        message={"Sorry, there is no matched exercise."} 
        open={notFoundAlert}
        onChange={onNotFoundChange}
        severity={'info'}
      />
       <Alerts 
        message={"Exercise successfully added to workout!"} 
        open={successAlert}
        onChange={onSuccessChange}
        severity={'info'}
      />
      <Alerts 
        message={"Error! Couldn't add exercise. Please add a workout first."} 
        open={errorAlert}
        onChange={onErrorChange}
        severity={'error'}
      />
      <div className='exercise-list-container'>
        { state.displayedExercises.length ? 
        <ExerciseList exercises={state.displayedExercises} 
          selectedWorkout={props.location.state ? props.location.state.workoutID : null}
          openSuccessAlert={onSuccessChange}
          openErrorAlert={onErrorChange}
          /> :  
        <ExerciseList exercises={state.exercises} 
          selectedWorkout={props.location.state ? props.location.state.workoutID : null}
          openSuccessAlert={onSuccessChange}
          openErrorAlert={onErrorChange}
          />}
      </div>
      </div>
    </>
  )
}