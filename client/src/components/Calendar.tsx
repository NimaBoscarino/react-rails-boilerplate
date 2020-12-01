import { Calendar, Badge } from 'antd';
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
import { Title } from './Title';

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
  const [selectedWorkoutID, setSelectedWorkoutID] = useState(0);
  const classes = useStyles();
  
  function dateCellRender(value:any) {
    let activeDate = allWorkouts.map(
      workout => workout.date
    )

    if(activeDate.includes(value.format().slice(0,10))){
      return <Badge color='#1990FF' />
    }
  }

  const handleClick = (workoutID:number) => {
    if(workoutID === selectedWorkoutID){
      setSelectedWorkoutID(0)
    } else{
      setSelectedWorkoutID(workoutID)
    }
  };

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
    <Title text="HISTORY" />
    <div className="site-calendar-demo-card">
      <Calendar 
        fullscreen={false} 
        mode={'month'} 
        onSelect={onSelect}
        dateCellRender={dateCellRender}
        className="calendar"
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
            workout.exercises.map((exercise, index) => (
              <Collapse 
                in={workout.id === selectedWorkoutID} 
                timeout="auto" 
                unmountOnExit
                key={index}
                >
              <WorkoutListItem 
                name = {exercise.exercise_name}
                id = {exercise.id}
                index = {index}
                key = {exercise.id}
                deletable={false}
                workoutID={workout.id}
                dispatch={()=>{}}
              />
              </Collapse>
            ))
          }
        </List>
     
      </List>
       ) : <>
        <br/>
        <ListItemText primary={'There is no workout for selected date.'} />
       </>}
    </>
  )
}
