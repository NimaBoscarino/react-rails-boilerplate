import React, {useState} from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { IWorkout } from '../types/workoutType';
import { Button } from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import { WorkoutListItem } from './WorkoutListItem';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100vw',
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  }),
);

export const WorkoutList = (
  props:{workouts:IWorkout[], 
    dispatch:(action:any)=>void}):React.ReactElement => {
  
  const classes = useStyles();
  const [selectedWorkoutID, setSelectedWorkoutID] = useState(0);
  const [redirect, setRedirect] = useState(false);
  const [workoutID, setWorkoutID] = useState(0);

  const handleClick = (workoutID:number) => {
    if(workoutID === selectedWorkoutID){
      setSelectedWorkoutID(0)
    } else{
      setSelectedWorkoutID(workoutID)
    }
  };

  const onChange = (selectedWorkoutID:number) => {
    setWorkoutID(selectedWorkoutID);
    setRedirect(true);
  }

  return (
    <>
    {
      redirect ? <Redirect to={{pathname: '/new-workout', state: {workoutID}}} /> :
      props.workouts.map(workout => (
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          // subheader={
          //   <ListSubheader component="div" id="nested-list-subheader">
          //     {workout.name}
          //   </ListSubheader>
          // }
          className={classes.root}
          key={workout.id}
        > 
          <ListItem button onClick={() => handleClick(workout.id)}>
            <ListItemIcon>
              <FormatListBulletedIcon />
            </ListItemIcon>
            <ListItemText primary={workout.name} />
            {workout.id === selectedWorkoutID ? <ExpandLess /> : <ExpandMore />}
          </ListItem>

        
          {/* goes over each exercise */}
            <List component="div" disablePadding>
              {
                workout.exercises.map((exercise, index) => {
                  return (
                    <Collapse 
                      in={workout.id === selectedWorkoutID} 
                      timeout="auto" 
                      unmountOnExit
                    >
                    <WorkoutListItem 
                      name={exercise.exercise_name}
                      id={exercise.id}
                      index={index}
                      key={exercise.id}
                      deletable={true}
                      workoutID={workout.id}
                      dispatch={props.dispatch}
                    />
                   </Collapse>
                  )})
              }
            </List>
          <Button color="primary" onClick={() => onChange(workout.id)}>Add Exercise</Button>
        </List>
      ))
    }
    </>
  );
}