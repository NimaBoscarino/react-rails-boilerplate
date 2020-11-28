import React from 'react';
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
import { WorkoutListItem } from './WorkoutListItem';
import { Button } from '@material-ui/core';
import { IWorkout } from '../types/workoutType';
import { NewWorkout } from './NewWorkout';
import { Redirect } from "react-router-dom";
import { CollapseExerciseItem } from './CollapseExerciseItem';

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

export const WorkoutList = (props:{workouts:IWorkout[]}):React.ReactElement => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [redirect, setRedirect] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const onChange = (workoutID:number) => {
    setRedirect(true);
  }

  return (
    <>
    {
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
          <ListItem button onClick={handleClick}>
            <ListItemIcon>
              <FormatListBulletedIcon />
            </ListItemIcon>
            <ListItemText primary={workout.name} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <CollapseExerciseItem 
            workout={workout} 
            open={open} 
            redirect={redirect}
          />
        </List>
      ))
    }
    </>
  );
}