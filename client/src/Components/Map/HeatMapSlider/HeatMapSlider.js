import React, {Component} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles(theme => ({
  root: {
    width: 300
  },
  margin: {
    height: theme.spacing(1)
  }
}));

const marks = [
  {
    value: 0,
    label: "5PM"
  },
  {
    value: 10,
    label: "6PM"
  },
  {
    value: 20,
    label: "7PM"
  },
  {
    value: 30,
    label: "8PM"
  },
  {
    value: 40,
    label: "9PM"
  },
  {
    value: 50,
    label: "10PM"
  },
  {
    value: 60,
    label: "11PM"
  },
  {
    value: 70,
    label: "12AM"
  },
  {
    value: 80,
    label: "1AM"
  },
  {
    value: 90,
    label: "2AM"
  },
  {
    value: 100,
    label: "3AM"
  }
];

function valuetext(value) {
  return `${value}°C`;
}

function valueLabelFormat(value) {
  return marks.findIndex(mark => mark.value === value) + 1;
}

export default class DiscreteSlider extends Component {
  render(){
  return (
    <div id='HeatMapSlider'>
      <div className='heat-map-slider-container'>
        <div className='slider-container'>
          <Slider
            className='slider-style'
            defaultValue={20}
            getAriaValueText={valuetext}
            aria-labelledby='discrete-slider-custom'
            step={10}
            marks={marks}
            onChange={(e, val)=>{this.val=val}}
            onMouseUp={(e)=>{this.props.handleChange(this.val)}}
          />
        </div>
      </div>
    </div>
  );}
}
