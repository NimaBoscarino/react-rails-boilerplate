import {IDay, IMax, IState} from '../types/maxRepsType';

const SET_HOME = 'SET_HOME';
const SET_GOALS = 'SET_GOALS';

type Action = 
| {type: 'SET_HOME', allDays: []}
| {type: 'SET_GOALS', currentProgress: []}

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
