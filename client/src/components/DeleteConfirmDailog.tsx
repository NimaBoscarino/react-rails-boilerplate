import React, {useState, useEffect} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';
import { TextButton } from './TextButton';

interface IProps {
  showDeleteConfirm:boolean,
  onConfirm:() => void,
  onCancel:() => void,
}

export const DeleteConfirmDialog = (props: IProps):React.ReactElement => {

  return (
    <div>
      <Dialog open={props.showDeleteConfirm} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Delete Exercise</DialogTitle>
        <DialogContent>
          <DialogContentText>
              Are you sure to delete this exercise?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <TextButton 
            onClick={props.onCancel}
            text={'CLOSE'}
          />
          <TextButton 
            onClick={props.onConfirm}
            text={'CONFIRM'}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
}