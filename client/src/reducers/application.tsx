export const SET_EXERCISES = "SET_EXERCISES";

type AppState = {};
type Action = 
  | {type: "SET_EXERCISES", exercises:[]};

export const reducer: AppState = (state: AppState, action: Action) => {

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

