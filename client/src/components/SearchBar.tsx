import React from 'react';
import TextField from '@material-ui/core/TextField';

export const SearchBar = (props:any):React.ReactElement => {
  return(
  <TextField 
    id="standard-basic" 
    label="Search Exercises" 
    onChange={event => props.onChange(event.target.value)}
  />
  )
}