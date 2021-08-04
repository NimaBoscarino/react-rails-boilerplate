import React from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export default function FilterBar (props) {
  
  const options = [
    'ALL Categories', 'Guitar', 'Art', 'Handycraft'
  ];
  const defaultOption = options[0];
  
  return (
    <Dropdown options={options} onChange={props.onSelect} value={defaultOption} placeholder="Select an option" />
  )
}

