import React from 'react';
import { ExerciseList } from './ExerciseList';
import { SearchBar } from '../SearchBar';
import { useExercisesData } from '../../hooks/useExercisesData';

export const NewWorkout = ():React.ReactElement => {
  const { state, dispatch } = useExercisesData();

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
    { state.displayedExercises.length ? 
    <ExerciseList exercises={state.displayedExercises}/> :  
    <ExerciseList exercises={state.exercises}/>}
    </>
  )
}