import React, {useEffect, useReducer} from 'react';
import {reducer, SET_EXERCISES} from '../reducers/application'

// should store all the app state in this variable? and what the type would be? 
const initialState = {
  exercises: []
}


export const useApplicationData = () => {
  // ------------- Thanks for Nic' buddy -----------------

  // q1: I got a error say 'No overload matches this call.' I guess maybe 
  // reducer function is defined in a wrong way?
  // the 'reducer' is the callback function of useReducer, 
  // it would take 'state' and 'action' as parameter and return a object, 
  // Just want clarify that when calling the function 'useReducer()'
  // with reducer which is a function imported from another file and a const defined 
  // within the same file, I don't need to add type to the arguements?? 
  // I am pretty sure that when declear a function, you need to add types to its parameters
  // and return values, but while calling a function maybe it is not needed to add types
  // to the arguements?
  type ReducerType = (state:{}, action:{}) => {};
  const [state, dispatch] = useReducer(reducer, initialState);

  // q2: It seems like the useReducer is responsible for manage all state
  // of the app, so the variable 'initialState' could be extrmly complated,
  // so how can I type it? OR it is not supposed to put all the app
  // states in the current file?

  // q3: I am kind of confused when dealing with nested type, for example,
  // the 'initialState' is an object contains an array of objects called 'exercises',
  // so is the type correct?
  // type Exercise {
  //   exercise_name: string;
  //   description: string;
  //   video_url: string;
  //   thumbnail_image_url: string;
  //   upper_body: boolean;
  //   lower_body: boolean;
  //   force: string
  // }

  // type State = {
  //   exercises: Exercise[];
  // }

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

  // Again thanks your help, really appreciated it! 

  return {state}
}