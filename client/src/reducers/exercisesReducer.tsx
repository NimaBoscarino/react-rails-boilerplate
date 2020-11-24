export const SET_EXERCISES = "SET_EXERCISES";

interface IExercise  {
  exercise_name: string;
  description: string;
  video_url?: string;
  thumbnail_image_url?: string;
  upper_body: boolean;
  lower_body: boolean;
  force: string
}

interface State {
  exercises: IExercise[];
}

type Action = 
  | {type: "SET_EXERCISES", exercises:[]};

export const exercisesReducer = (state: State, action: Action):State => {

  switch(action.type){
    case SET_EXERCISES:
      return{
        ...state,
        exercises: action.exercises
      }
    default:
      throw new Error(`Tried to reduce with unsupported action type:  ${action.type}`);
  }
}

