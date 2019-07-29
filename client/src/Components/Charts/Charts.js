import React, { Component } from "react";
import axios from "axios";
import CanvasJSReact from "../../global-assets/canvasjs-2.3.2/canvasjs.react";
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Charts extends Component {
  constructor(props) {
    super(props);
    this.state={
      data:null
    }
    this.processData=this.processData.bind(this);
  }

  componentDidMount(){
    const result=[];
    this.props.data.forEach(place=>{
      axios.get(`api/popular/${place.id}`).then(response=>{
        result.push(this.processData(response.data, place))
        this.setState({
          data:result
        })
      })
    })
    
  }

  processData(propsData, place) {
      const arr = propsData.popular_times.reverse();
      let data = arr
        .map(element => {
          return {
            label: `${element.hour_id}`,
            y: element.busy_value
          };
        });
      const dataSet = {
        type: "line",
        name: `${place.name}`,
        showInLegend: true,
        toolTipContent: "At {label}:00 : {y}",
        dataPoints: data.slice(12).concat(data.slice(0, 12))
      };
    return dataSet;
  }

  render() {
    const options = {
      backgroundColor: "transparent",
      animationEnabled: true,
      exportEnabled: true,
      theme: "light2", // "light1", "dark1", "dark2"
      title: {},
      legend: {
        fontColor: "white"
      },
      toolTip: {
        shared: true
      },
      axisY: {
        title: "Busy Levels",
        includeZero: true,
        titleFontColor: "white",
        labelFontColor: "white",
        titleFontWeight: "bold",
        gridColor: "white",
        gridThickness: 1
      },
      axisX: {
        title: "Time of Day",
        titleFontWeight: "bold",
        titleFontColor: "white",
        labelFontColor: "white"
      },
      data: this.state.data
    };

    return (
      <div className='chart-container'>
        <CanvasJSChart
          options={options}
          /* onRef={ref => this.chart = ref} */
        />
      </div>
    );
  }
}

export default Charts;
