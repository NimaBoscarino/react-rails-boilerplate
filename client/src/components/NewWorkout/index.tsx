import React from 'react';
import { ExerciseList } from './ExerciseList';
import { SearchBar } from '../SearchBar';
import { useExercisesData } from '../../hooks/useExercisesData';


export const NewWorkout = ():React.ReactElement => {
  const { state, dispatch } = useExercisesData();

  const filterExercises = (value: string) => {
    const exercises = state.exercises.filter(exercise => exercise.exercise_name.includes(value))
    console.log(exercises);
    dispatch({type:'SET_EXERCISES', exercises})
  }

  return(
    <>
    <SearchBar onChange={ (value:string) => filterExercises(value)}/>
    <ExerciseList exercises={state.exercises}/>
    </>
  )
}