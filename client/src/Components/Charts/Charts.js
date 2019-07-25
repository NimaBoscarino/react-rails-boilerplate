import React, { Component } from "react";
import CanvasJSReact from "../../global-assets/canvasjs-2.3.2/canvasjs.react";
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Charts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popularTimes: false,
      dataPoints: [
        { x: 1, y: 64 },
        { x: 2, y: 61 },
        { x: 3, y: 64 },
        { x: 4, y: 62 },
        { x: 5, y: 64 },
        { x: 6, y: 60 },
        { x: 7, y: 58 },
        { x: 8, y: 59 },
        { x: 9, y: 53 },
        { x: 10, y: 54 },
        { x: 11, y: 61 },
        { x: 12, y: 60 },
        { x: 13, y: 55 },
        { x: 14, y: 60 },
        { x: 15, y: 56 },
        { x: 16, y: 60 },
        { x: 17, y: 59.5 },
        { x: 18, y: 63 },
        { x: 19, y: 58 },
        { x: 20, y: 54 },
        { x: 21, y: 59 },
        { x: 22, y: 64 },
        { x: 23, y: 59 }
      ]
    };
  }

  processData() {
    const arr = this.props.data[0].popular_times.reverse();
    let data = arr
      .filter(element => element.day_id === 1)
      .map(element => {
        return {
          label: `${element.hour_id}`,
          y: element.busy_value
        };
      });
    data = data.slice(12).concat(data.slice(0, 12));
    return data;
  }

  componentDidUpdate() {
    if (!this.state.popularTimes) {
      this.setState({
        popularTimes: true,
        dataPoints: this.processData()
      });
    }
  }

  render() {
    const options = {
      backgroundColor: "transparent",
      animationDuration: 800,
      animationEnabled: true,
      exportEnabled: true,
      theme: "light2", // "light1", "dark1", "dark2"
      title: {},
      axisY: {
        includeZero: true
      },
      axisX: {
      },
      data: [
        {
          type: "line",
          toolTipContent: "Hour {x}: {y}",
          dataPoints: this.state.dataPoints
        }
      ]
    };

    return (
      <div>
        <CanvasJSChart
          options={options}
          /* onRef={ref => this.chart = ref} */
        />
      </div>
    );
  }
}

export default Charts;
