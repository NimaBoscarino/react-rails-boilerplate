import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    button:{
      color:'#73CEC1'
    }
  }),
);

export const TextButton = (props:{text:string, onClick: () => void}):React.ReactElement => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button className={classes.button} onClick={props.onClick} color="primary">{props.text}</Button>
    </div>
  );
}