import React, { useState} from "react";
import {Dropdown} from 'react-bootstrap'


function DropdownCity(props){
 
  
  return(
    <Dropdown>
        <Dropdown.Toggle variant="light" id="dropdown-basic">
        {props.title}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={props.onChildClick('Vancouver')}>{props.city[0]}</Dropdown.Item>
          <Dropdown.Item onClick={props.onChildClick('North Vancouver')}>{props.city[1]}</Dropdown.Item>
          <Dropdown.Item onClick={props.onChildClick('Whistler')}>{props.city[2]}</Dropdown.Item>
          <Dropdown.Item onClick={props.onChildClick('Delta')}>{props.city[3]}</Dropdown.Item>
          <Dropdown.Item onClick={props.onChildClick('Victoria')}>{props.city[4]}</Dropdown.Item>
          <Dropdown.Item onClick={props.onChildClick('Squamish')}>{props.city[5]}</Dropdown.Item>
        </Dropdown.Menu>
     </Dropdown>
  )

}

export default DropdownCity