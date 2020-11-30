import React, {useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import axios from 'axios';

interface IProps {
  workoutID:number,
  exerciseID:number,
  open:boolean,
  onClick:() => void
}

interface ISet {
  id:number,
  routine_id:number,
  weight:number,
  reps:number,
  rpe:number
}

export const SetsListDialog = (props: IProps):React.ReactElement => {

  const [sets, setSets] = useState<ISet[]>([{
    id:1,
    routine_id:1,
    weight:1,
    reps:1,
    rpe:1
  }]);

  useEffect(() => {
    console.log('useEffect');
    
    axios
      .get(`./api/setts/${props.workoutID}/${props.exerciseID}`)
      .then(res => {
        console.log('before second render');
        setSets(res.data)
        console.log('axios done');
        console.log(sets);
      })
      .catch(err => console.log(err));
    
    console.log('useEffect');
    
  }, [])
  console.log('component rendered');
  return (
    <div>
      <Dialog open={props.open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Sets List</DialogTitle>
        {sets.length ? sets.map(set => {
          console.log('sets map');
          console.log(sets);
          <DialogContent>
           <DialogContentText>
            weight: {set.weight}
           </DialogContentText>
           <DialogContentText>
            reps: {set.reps}
           </DialogContentText>
           <DialogContentText>
            rpe: {set.rpe}
           </DialogContentText>
         </DialogContent>
        }) : 
        <DialogContentText>
          There are no sets for current exercise.
        </DialogContentText>}
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