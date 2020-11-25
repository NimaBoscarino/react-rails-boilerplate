export interface IExercise {
  id: number;
  exercise_name: string;
  description: string;
  video_url: string;
  thumbnail_image_url: string;
  upper_body: boolean;
  lower_body: boolean;
  force: string
}

export type State = {
  exercises: IExercise[];
  displayedExercises: IExercise[];
}
