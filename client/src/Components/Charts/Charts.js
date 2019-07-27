import React, { Component } from "react";
import CanvasJSReact from "../../global-assets/canvasjs-2.3.2/canvasjs.react";
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Charts extends Component {
  constructor(props) {
    super(props);
    this.processData=this.processData.bind(this);
  }

  processData(propsData) {
    const result = [];
    propsData.forEach(element => {
      const arr = element.popular_times.reverse();
      let data = arr
        .filter(element => element.day_id === 1)
        .map(element => {
          return {
            label: `${element.hour_id}`,
            y: element.busy_value
          };
        });
      const dataSet = {
        type: "line",
        name: `${element.name}`,
        showInLegend: true,
        toolTipContent: "At {label}:00 : {y}",
        dataPoints: data.slice(12).concat(data.slice(0, 12))
      };
      result.push(dataSet);
    });
    return result;
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
      data: this.processData(this.props.data)
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
