import React from 'react';
import Filter1Icon from '@material-ui/icons/Filter1';
import Filter2Icon from '@material-ui/icons/Filter2';
import Filter3Icon from '@material-ui/icons/Filter3';
import Filter4Icon from '@material-ui/icons/Filter4';
import Filter5Icon from '@material-ui/icons/Filter5';

const renderSwitch = (index:number):React.ReactElement => {
  switch(index){
    case 0:
      return <Filter1Icon/>;
    case 1:
      return <Filter2Icon/>;
    case 2:
      return <Filter3Icon/>;
    case 3:
      return <Filter4Icon/>;
    case 4:
      return <Filter5Icon/>;
    default:
      return <></>;
  }
}
export const FilterIcon = (props: {index:number}):React.ReactElement => {
  return(
    renderSwitch(props.index)
  )
}