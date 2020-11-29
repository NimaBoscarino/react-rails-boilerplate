import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import axios from 'axios';

interface IProps {
  id:number,
  reps:number,
  rpe:number,
  weight:number,
  open:boolean,
  onClick:() => void
}

export const SetsListDialog = (props: IProps):React.ReactElement => {

  return (
    <div>
      <Dialog open={props.open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Sets List</DialogTitle>
        <DialogContent>
          <DialogContentText>
           weight: {props.weight}
          </DialogContentText>
          <DialogContentText>
           reps: {props.reps}
          </DialogContentText>
          <DialogContentText>
           rpe: {props.rpe}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClick} color="primary">
            Close
          </Button>
          {/* <Button onClick={props.onClick} color="primary">
            Finish All Sets
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}