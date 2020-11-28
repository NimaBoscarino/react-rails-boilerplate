import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }),
);

interface IProps {
  message:string;
  open:boolean;
  onChange:() => void;
  severity:'info' | 'error'
}

export const Alerts = (props:IProps):React.ReactElement => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Collapse in={props.open}>
        <Alert
          severity={props.severity}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={props.onChange}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {props.message}
        </Alert>
      </Collapse>
    </div>
  );
}