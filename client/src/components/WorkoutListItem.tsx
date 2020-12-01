import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { FilterIcon } from './FilterIcon';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { NewSetsDialog } from './NewSetsDialog';
import axios from 'axios';
import { SetsListDialog } from './SetsListDialog';
import { DeleteConfirmDialog } from './DeleteConfirmDailog';


interface IProp {
  name: string,
  id: number,
  index: number,
  deletable: boolean,
  workoutID: number,
  dispatch:(action:any) => void
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
  const [showNewSets, setShowNewSets] = useState(false);
  const [showSetsList, setShowSetsList] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const showNewSetsDialog = () => {
    setShowNewSets(!showNewSets);
  }

  const showSetsListDialog = () => {
    setShowSetsList(!showSetsList)
  }

  const showDeleteConfirmDialog = () => {
    setShowDeleteConfirm(!showDeleteConfirm);
  }

  const deleteExercise = () => {

    axios
      .delete(`/api/workouts/${props.workoutID}/remove_exercise/${props.id}`)
      .then(res => {
        if(res.data.success) {
         props.dispatch({type:"DELETE_EXERCISE", workoutID:props.workoutID, exerciseID:props.id})
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
          onClick={showSetsListDialog}
          />
      <ListItemIcon>
        {props.deletable ? 
          <>
          <EditOutlinedIcon onClick={showNewSetsDialog} style={{ fontSize: 28, marginRight:10 }}/>
          <DeleteOutlineIcon style={{ fontSize: 30 }} onClick={showDeleteConfirmDialog}/> 
          </>
          : <></>}
          {showDeleteConfirm &&
            <DeleteConfirmDialog 
              showDeleteConfirm={showDeleteConfirm}
              onCancel={showDeleteConfirmDialog}
              onConfirm={deleteExercise}
            />}
          {showNewSets && 
          <NewSetsDialog
            open={showNewSets}
            onClick={showNewSetsDialog}
            exerciseID={props.id}
            workoutID={props.workoutID}
           />}
          { showSetsList &&
            <SetsListDialog 
              open={showSetsList}
              workoutID={props.workoutID}
              exerciseID={props.id}
              onClick={showSetsListDialog}
            />}
      </ListItemIcon>
    </ListItem>
  )
}