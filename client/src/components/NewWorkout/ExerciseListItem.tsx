import axios from 'axios';
import React from 'react';
import { IExercise } from "../../types/exercisesType";
import  { ExerciseDialog }  from "./ExerciseDialog";

interface IProps extends IExercise{
  selectedWorkout:number,
  openSuccessAlert:()=>void,
  openErrorAlert:()=>void
}

export const ExerciseListItem = (props: IProps):React.ReactElement => {
  const [open, setOpen] = React.useState(false);

  const addExercise = () => {
    console.log(props.id);
    console.log(props.selectedWorkout);
    axios
      .post(`/api/workouts/${props.selectedWorkout}/add_exercise?exercise_id=${props.id}`)
      .then(res => {
        console.log(res.data)
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
      <p onClick = {() => setOpen(true)}>{props.exercise_name}</p>

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