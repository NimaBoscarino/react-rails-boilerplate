import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { FilterIcon } from './FilterIcon';


interface IProp {
  name: string,
  id: number,
  index: number
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

  return (
    <ListItem button className={classes.nested}>
      <ListItemIcon>
        <FilterIcon index={props.index}/>
      </ListItemIcon>
      <ListItemText primary={props.name}/>
      <ListItemIcon>
        <DeleteOutlineIcon style={{ fontSize: 30 }}/>
      </ListItemIcon>
    </ListItem>
  )
}