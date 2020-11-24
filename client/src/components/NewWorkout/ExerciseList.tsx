import React from 'react';
import {ExerciseListItem} from './ExerciseListItem';
import {IExercise} from '../../types/exercisesType';

export const ExerciseList = (props: {exercises: IExercise[]}):React.ReactElement => {
  return(
    <div>
      {props.exercises.map((exercise: IExercise) => 
      <ExerciseListItem
        id = {exercise.id}
        key = {exercise.id}
        exercise_name = {exercise.exercise_name}
        description = {exercise.description}
        video_url = {exercise.video_url}
        thumbnail_image_url = {exercise.thumbnail_image_url}
        upper_body = {exercise.upper_body}
        lower_body = {exercise.lower_body}
        force = {exercise.force}
      />
    )}
    </div>
  )
}