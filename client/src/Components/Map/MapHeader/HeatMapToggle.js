import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

export default function SwitchLabels() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={<Switch value='checkedA' />}
        className='heatmap-toggle-button'
        label='Toggle Heat Map'
      />
    </FormGroup>
  );
}
