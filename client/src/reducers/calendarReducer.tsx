const SET_CALENDARWORKOUT = 'SET_CALENDARWORKOUT';

type Action = {type: 'SET_CALENDARWORKOUT', allWorkouts: []}

interface IWorkout {
  id:number,
  date:string,
  name:string,
  exercises:[]
}

interface IState {
  allWorkouts: IWorkout[]
}

export const calendarReducer = (state: IState, action: Action):IState => {
  console.log('calendarReducer');
  
  switch (action.type) {
    case SET_CALENDARWORKOUT:
      return {
        allWorkouts: action.allWorkouts
      }
    default:
      throw new Error('Tried to reduce with unsupported action type');
  }
}
