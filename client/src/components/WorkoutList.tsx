import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { WorkoutListItem } from './WorkoutListItem';
import { SET_WORKOUTS } from '../reducers/workoutReducer';
import { useWorkoutData } from '../hooks/useWorkoutData';
import { Button } from '@material-ui/core';

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

export const WorkoutList = ():React.ReactElement => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const { state, dispatch } = useWorkoutData();

  // should fetch workout list for today, rely on state.workouts
  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [input])

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
    {
      workoutList.map(workout => (
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
          <ListItem button onClick={handleClick}>
            <ListItemIcon>
              <FormatListBulletedIcon />
            </ListItemIcon>
            <ListItemText primary={workout.name} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {
                workout.exercises.map((exercise, index) => (
                  <WorkoutListItem 
                   name = {exercise.name}
                   id = {exercise.id}
                   index = {index}
                   key = {exercise.id}
                  />
                ))
              }
            </List>
          </Collapse>
          <Button color="secondary">Add Exercise</Button>
        </List>
      ))
    }
    </>
  );
}