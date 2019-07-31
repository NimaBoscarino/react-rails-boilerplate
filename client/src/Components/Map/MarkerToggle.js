import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

export default function SwitchLabels(props) {
  const [state, setState] = React.useState({
    checked: true
  });

  const handleChange = name => event => {
    setState({ checked: !state.checked });
  };

  return (
    <div className='marker-toggle-div'>
   
      <FormGroup row>
        <FormControlLabel
          control={
            <Switch
              value='checked'
              checked={state.checked}
              onClick={handleChange()}
            />
          }
          className='heatmap-toggle-button'
          label=' Markers'
          onChange={() => {
            props.toggleMarkers();
          }}
        />
      </FormGroup>
    </div>
  );
}
