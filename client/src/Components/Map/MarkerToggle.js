import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function SwitchLabels(props) {
  const [state, setState] = React.useState({
    checked: true
  });

  const handleChange = name => event => {
    setState({ checked: !state.checked });
  };

  return (
    <div className='marker-toggle-div'>
      <FaMapMarkerAlt className='filter-icons-toggle'/>
      <FormGroup row>
        <FormControlLabel
          control={
            <Switch
              value='checked'
              color='default'
              checked={state.checked}
              onClick={handleChange()}
            />
          }
          className='heatmap-toggle-button'
          onChange={() => {
            props.toggleMarkers();
          }}
        />
      </FormGroup>
    </div>
  );
}
