import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { FilterIcon } from './FilterIcon';
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined';
import { NewSetsDialog } from './NewSetsDialog';
import axios from 'axios';
import { useWorkoutData } from '../hooks/useWorkoutData';


interface IProp {
  name: string,
  id: number,
  index: number,
  deletable: boolean,
  workoutID: number,
  onClick?: () => void
}

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

export const WorkoutListItem = (props:IProp):React.ReactElement => {
  const classes = useStyles();
  const { state, dispatch } = useWorkoutData();
  const [open, setOpen] = useState(false);

  const onClick = () => {
    setOpen(!open);
  }

  const deleteExercise = () => {

    axios
      .delete(`/api/workouts/${props.workoutID}/remove_exercise/${props.id}`)
      .then(res => {
        if(res.data.success) {
          dispatch({type:"DELETE_EXERCISE", workoutID:props.workoutID, exerciseID:props.id})
        }
      })
      .catch(err => console.log(err))
  }

  return (
    <ListItem button className={classes.nested}>
      <ListItemIcon>
        <FilterIcon index={props.index}/>
      </ListItemIcon>
        <ListItemText 
          primary={props.name}
          onClick={props.onClick}
          />
      <ListItemIcon>
        {props.deletable ? 
          <>
          <BorderColorOutlinedIcon onClick={onClick} style={{ fontSize: 24, marginRight:10 }}/>
          <DeleteOutlineIcon style={{ fontSize: 30 }} onClick={deleteExercise}/> 
          </>
          : <></>}
          {open ? <NewSetsDialog
                    open={open}
                    onClick={onClick}
                    exerciseID={props.id}
                    workoutID={props.workoutID}
           /> : <></>}
      </ListItemIcon>
    </ListItem>
  )
}