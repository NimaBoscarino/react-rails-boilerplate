const SET_HOME = 'SET_HOME';

type Action = {type: 'SET_HOME', allDays: []}

interface IDay {
  workout_date:string,
  sum:number
}

interface IState {
  allDays: IDay[]
}

export const homeReducer = (state: IState, action: Action):IState => {
  console.log('homeReducer');
  
  switch (action.type) {
    case SET_HOME:
      return {
        allDays: action.allDays
      }
    default:
      throw new Error('Tried to reduce with unsupported action type');
  }
}
