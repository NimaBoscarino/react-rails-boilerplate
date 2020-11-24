import React from 'react';

interface IProps {
  exercise_name: string;
  description: string;
  video_url: string;
  thumbnail_image_url: string;
  upper_body: boolean;
  lower_body: boolean;
  force: string
}

export const ExerciseListItem = (props: IProps):React.ReactElement => {
  return(
    <div>
      <p>{props.exercise_name}</p>
      <p>{props.description}</p>
    </div>
  )
}