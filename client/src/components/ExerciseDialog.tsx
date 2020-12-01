import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import {IExercise} from '../types/exercisesType';
import { ExerciseTab } from './ExerciseTab';
import { TextButton } from './TextButton';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const StyledDialog = withStyles({
  paper:{
    width:'100vw',
    height:'80vh'
  }
})(Dialog);

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

interface IProps extends IExercise {
  open: boolean;
  onClick: () => void;
  addExercise: () => void;
}

export const ExerciseDialog = (props:IProps):React.ReactElement => {

  return (
    <div >
      <StyledDialog  onClose={props.onClick} aria-labelledby="customized-dialog-title" open={props.open}>
        <DialogTitle id={props.exercise_name} onClose={props.onClick}>
          {props.exercise_name}
        </DialogTitle>
        <ExerciseTab 
          description={props.description}
          video_url={props.video_url}
          thumbnail_image_url={props.thumbnail_image_url}
          upper_body={props.upper_body}
          lower_body={props.lower_body}
          force={props.force}
        />
        <DialogActions>
          <TextButton 
            onClick={props.addExercise}
            text={'ADD EXERCISE'}
          />
        </DialogActions>
      </StyledDialog>
    </div>
  );
}
