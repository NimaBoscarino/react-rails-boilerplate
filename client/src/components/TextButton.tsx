import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(0),
      },
    },
    textPrimary: {
      color:'#1990FF',
    },
    textSecondary: {
      color: '#9E5DFF',
      fontSize:'1.2rem',
      marginTop: '2rem'
    }
  }),
);

export const TextButton = (props:{text:string, onClick: () => void}):React.ReactElement => {
  const classes = useStyles();
  const isPrimary = props.text === 'Add New Workout' ? false : true;
 
  return (
    <>
    {
      isPrimary ?  
      <div className={classes.root}>
        <Button className={classes.textPrimary} onClick={props.onClick}>{props.text}</Button>
      </div> : 
      <div className={classes.root}>
        <Button className={classes.textSecondary} onClick={props.onClick}>{props.text}</Button>
      </div>
    }
   </>
  );
}