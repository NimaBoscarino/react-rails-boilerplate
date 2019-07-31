import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { FaMapMarked } from "react-icons/fa";

export default function SwitchLabels(props) {
  const [state, setState] = React.useState({
    checked: true
  });

  const handleChange = name => event => {
    setState({ checked: !state.checked });
  };

  return (
    <div className='heatmap-toggle-div'>
      <FaMapMarked className='filter-icons-toggle' />
      <FormGroup row>
        <FormControlLabel
          control={
            <Switch
              value='checked'
              color='default'
              size='small'
              checked={state.checked}
              onClick={handleChange()}
            />
          }
          className='heatmap-toggle-button'
          onChange={() => {
            props.toggleHeatmap();
          }}
        />
      </FormGroup>
    </div>
  );
}
