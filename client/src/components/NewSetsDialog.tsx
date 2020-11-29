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
  open: boolean, 
  onClick: () => void, 
  workoutID: number,
  exerciseID: number
}
export const NewSetsDialog = (props: IProps):React.ReactElement => {
  // In order to add previous workout memory
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');
  const [rpe, setRpe] = useState('');
  // remember to change the weight,reps, and RPE to number.   
  
  const saveSets = () => {
    props.onClick();
    axios.post(`/api/setts/${props.workoutID}/${props.exerciseID}`,{
      sett:{
        "reps": parseInt(reps),
        "rpe": parseInt(rpe),
        "weight": parseInt(weight)
      }})
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }
  return (
    <div>

      <Dialog open={props.open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New Set</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your weights, reps, and RPE. 
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="weights"
            label="weights"
            value={weight}
            onChange={(event) => setWeight(event.target.value)}
            fullWidth
          />
              <TextField
            autoFocus
            margin="dense"
            id="reps"
            label="reps"
            value={reps}
            onChange={(event) => setReps(event.target.value)}
            fullWidth
          />
              <TextField
            autoFocus
            margin="dense"
            id="RPE"
            label="RPE"
            value={rpe}
            onChange={(event) => setRpe(event.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClick} color="primary">
            Cancel
          </Button>
          <Button onClick={saveSets} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}