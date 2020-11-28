import React from 'react';
import List from '@material-ui/core/List';
import { IWorkout } from '../types/workoutType';
import Collapse from '@material-ui/core/Collapse';
import { WorkoutListItem } from './WorkoutListItem';
import { Button } from '@material-ui/core';
import { Redirect } from 'react-router-dom';

export const CollapseExerciseItem = (props: {
    workout: IWorkout,
    open: boolean,
    redirect: boolean
    onChange: () => void
  }):React.ReactElement => {

    // if(!props.redirect) {
    //   return(
    //     <Collapse in={props.open} timeout="auto" unmountOnExit>
    //       {/* goes over each exercise */}
    //       <List component="div" disablePadding>
    //         {
    //           props.workout.exercises.map((exercise, index) => (
    //             <WorkoutListItem 
    //               name = {exercise.exercise_name}
    //               id = {exercise.id}
    //               index = {index}
    //               key = {exercise.id}
    //             />
    //           ))
    //         }
    //       </List>
    //       <Button color="secondary" >Add Exercise</Button>
    //     </Collapse>
    //     )
    // }else {
    //   return (
    //     <Redirect to={{pathname: '/new-workout', state: {workoutID:props.workout.id}}} />
    //   )
    // }

    return (
      props.redirect ? <Redirect to={{pathname: '/new-workout', state: {workoutID:props.workout.id}}} /> :
      <Collapse in={props.open} timeout="auto" unmountOnExit>
      {/* goes over each exercise */}
      <List component="div" disablePadding>
        {
          props.workout.exercises.map((exercise, index) => (
            <WorkoutListItem 
              name = {exercise.exercise_name}
              id = {exercise.id}
              index = {index}
              key = {exercise.id}
            />
          ))
        }
      </List>
      <Button color="secondary" onClick={props.onChange}>Add Exercise</Button>
    </Collapse>
    )
}