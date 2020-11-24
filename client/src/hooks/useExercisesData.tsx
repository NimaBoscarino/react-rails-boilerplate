import React, {useEffect, useReducer} from 'react';
import  {exercisesReducer, SET_EXERCISES} from '../reducers/exercisesReducer';

const initialState = {
  exercises: []
}
export const useApplicationData = () => {
  const [state, dispatch] = useReducer(exercisesReducer, initialState);

  // q4: what is the type of a react component that return a JSX component?
  // I have saw two ways to type a component: 
  // export const ExampleComponent: React.FC = () => {} 
  // AND export const ExampleComponent: JSX.Element = () => {}
  // I wonder which is recommended and any differences? 

  // q5: tring to add a type for a callback function, not sure if it's correct

  type Callback = (para1: number) => number;

  const example = (callback: Callback):void => {
    let num = 5;
    callback(num);
    console.log("is this type correct? ");
  }

  example((num)=>{return num });
  return {state}
}