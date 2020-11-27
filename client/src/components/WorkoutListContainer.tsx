import React from 'react';
import { useWorkoutData } from '../hooks/useWorkoutData';
import { TextButton } from './TextButton';
import { NewWorkoutDialog } from './NewWorkoutDialog';
import { Reminder } from './Reminder';
import { WorkoutList } from './WorkoutList';

const workoutList = [
  {
    id: 1,
    name:'workout one',
    exercises: [{
      name:'exercise one',
      id: 1
    },
    {
      name:'exercise two',
      id: 2
    }]
  },
  {
    id: 2,
    name:'workout two',
    exercises: [{
      name:'exercise one',
      id: 1
    },
    {
      name:'exercise two',
      id: 2
    }]
  },
]

export const WorkoutListContainer = ():React.ReactElement => {
  const { state, dispatch } = useWorkoutData();
  const [open, setOpen] = React.useState(false);

  const hasWorkouts = state.workouts.length !== 0;
  
  const openDialog = () => {
    setOpen(!open);
  }
  return(
    <>
    <h3>Today's Workout list</h3>
    <WorkoutList/>
    { hasWorkouts ? <WorkoutList/> : <Reminder/> }
    <TextButton 
      text='Add New Workout' 
      onClick={openDialog}
    />
    <NewWorkoutDialog 
      open={open}
      onClick={openDialog}
    />
    </>
  )
}