import React, {useState, useEffect} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';
import { TextButton } from './TextButton';

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

  const [sets, setSets] = useState<ISet[]>([]);

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
        <DialogContent>
        {
          sets.length ? 
            sets.map((set, index) => (
              <DialogContentText key={set.id}>
                Set {index + 1}
                <br/>
                Weight: {set.weight}LB
                <br/>
                Reps: {set.reps}
                <br/>
                RPE: {set.rpe}
              </DialogContentText>
            )) : 
            <DialogContentText>
              There are no sets for current exercise.
            </DialogContentText>
        }
        </DialogContent>
        <DialogActions>
          <TextButton 
            onClick={props.onClick}
            text={'CLOSE'}
          />
          {/* <Button onClick={props.onClick} color="primary">
            Finish All Sets
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}