import axios from 'axios';
import React from 'react';
import { IExercise } from "../types/exercisesType";
import  { ExerciseDialog }  from "./ExerciseDialog";
import '../styles/exercises.scss'

interface IProps extends IExercise{
  selectedWorkout:number | null,
  openSuccessAlert:()=>void,
  openErrorAlert:()=>void
}

export const ExerciseListItem = (props: IProps):React.ReactElement => {
  const [open, setOpen] = React.useState(false);

  const addExercise = () => {
 
    axios
      .post(`/api/workouts/${props.selectedWorkout}/add_exercise?exercise_id=${props.id}`)
      .then(res => {
        setOpen(!open);
        props.openSuccessAlert();
      })
      .catch(err => {
        setOpen(!open);
        props.openErrorAlert();
        console.log(err)
      })
  }

  return(
    <div>
      <div className='outter-container'>
        <div className='exercise-name-container'>
          <span className='exercise-name' onClick = {() => setOpen(true)}>
            {props.exercise_name} ({props.lower_body ? 'Lower Body' : 'Upper Body'})
          </span>
        </div>
        <span className='force'>{props.force}</span>
      </div>
      <ExerciseDialog 
        id={props.id}
        key={props.id}
        exercise_name={props.exercise_name}
        description={props.description}
        video_url={props.video_url}
        thumbnail_image_url={props.thumbnail_image_url}
        upper_body={props.upper_body}
        lower_body={props.lower_body}
        force={props.force}
        open={open}
        onClick={() => setOpen(!open)}
        addExercise={addExercise}
      />
    </div>
  )
}