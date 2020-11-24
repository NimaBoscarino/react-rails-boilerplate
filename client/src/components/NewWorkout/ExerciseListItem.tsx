import React from 'react';
import { IExercise } from "../../types/exercisesType";
import  { ExerciseDialog }  from "./ExerciseDialog";

export const ExerciseListItem = (props: IExercise):React.ReactElement => {
  const [open, setOpen] = React.useState(false);

  return(
    <div>
      <p onClick = {() => setOpen(true)}>{props.exercise_name}</p>

      <ExerciseDialog 
        id = {props.id}
        key = {props.id}
        exercise_name={props.exercise_name}
        description = {props.description}
        video_url = {props.video_url}
        thumbnail_image_url = {props.thumbnail_image_url}
        upper_body = {props.upper_body}
        lower_body = {props.lower_body}
        force = {props.force}
        open = {open}
        onClick = {() => setOpen(!open)}
      />
    </div>
  )
}