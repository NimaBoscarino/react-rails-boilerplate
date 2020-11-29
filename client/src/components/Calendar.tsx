import { Calendar } from 'antd';
import React, { useEffect, useState } from 'react';
import '../styles/calendar.scss';
import 'antd/dist/antd.css';
import { useCalendarData } from '../hooks/useCalendarData';
import { getWorkoutsByDate } from '../helper/getWorkoutsByDate';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import { WorkoutListItem } from './WorkoutListItem';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

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

export interface IExercise {
  id: number;
  exercise_name: string;
  description: string;
  video_url: string;
  thumbnail_image_url: string;
  upper_body: boolean;
  lower_body: boolean;
  force: string
}

interface IWorkout {
  id:number,
  date:string,
  name:string | null,
  exercises:IExercise[]
}

export const Calendars = () => {
  const intialWorkout:IWorkout[] = [];
  const allWorkouts = useCalendarData();
  const [workouts, setWorkouts] = useState(intialWorkout);
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleClick = () => {
    setOpen(!open);
  }

  useEffect(() => {
    console.log('useEffect');
    let date = new Date();
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = date.getFullYear();
    const today = yyyy + '-' + mm + '-' + dd;
    onSelect(today)
  }, [allWorkouts]);
  
  const onSelect = (date:any) => {
    console.log('onSelect');
    let workouts; 
    if(typeof date === 'string') {
      console.log(allWorkouts);
      workouts = getWorkoutsByDate(allWorkouts, date);
    } else {
      const selectedDate = date.format().slice(0,10);
      console.log(selectedDate);
      workouts = getWorkoutsByDate(allWorkouts, selectedDate);
      console.log(workouts);
    }
    console.log(workouts);
    setWorkouts(workouts);
  }

  return (
    <>
    <div className="site-calendar-demo-card">
      <Calendar 
        fullscreen={false} 
        mode={'month'} 
        onSelect={onSelect}
      />
    </div>
    {workouts.length ? <><br/><ListItemText primary={'Workouts For Selected Day: '} /></> : <></>}
    {workouts.length ? workouts.map(workout =>
      <List
      component="nav"
      aria-labelledby="nested-list-subheader"
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
      {/* goes over each exercise */}
        <List component="div" disablePadding>
          {
            workout.exercises.map((exercise, index) => (
              <WorkoutListItem 
                name = {exercise.exercise_name}
                id = {exercise.id}
                index = {index}
                key = {exercise.id}
                deletable={false}
              />
            ))
          }
        </List>
      </Collapse>
      </List>
       ) : <>
        <br/>
        <ListItemText primary={'There is no workout for selected date.'} />
       </>}
    </>
  )
}
