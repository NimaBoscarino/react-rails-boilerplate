import React, {Component} from 'react';
import CanvasJSReact from '../../global-assets/canvasjs-2.3.2/canvasjs.react';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Charts extends Component {
    constructor(props){
        super(props);
        this.state={
            popularTimes:false,
            chartData: this.processData()
        }
    }

    processData(){
        const result=[];
        this.props.data.forEach(element=>{
            const arr=element.popular_times.reverse();
            let data = arr.filter(element=>element.day_id===1)
                .map((element)=>{
                    return {
                        label:`${element.hour_id}`,
                        y:element.busy_value
                    }
                });
            const dataSet={
                type: "line",
                name: `${element.name}`,
                showInLegend:true,
                toolTipContent: "At {label}:00 : {y}",
                dataPoints: data.slice(12).concat(data.slice(0,12))
            }
            result.push(dataSet);
        });
        return result;
    }

    // componentDidUpdate(){
    //     if (!this.state.popularTimes) {
    //         this.setState({
    //             popularTimes:true,
    //             dataPoints:this.processData()
    //         })
    //     }
    // }

    render(){

        const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2", // "light1", "dark1", "dark2"
			title:{
				text: "Popular Times"
            },
            toolTip:{
                shared:true
            },
			axisY: {
				title: "Busy level",
				includeZero: true
			},
			axisX: {
				title: "Hour of the Day"
			},
			data: this.state.chartData
		}
              
         return (
            <div>
              <CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
            </div>
          );
    }
}

export default Charts;