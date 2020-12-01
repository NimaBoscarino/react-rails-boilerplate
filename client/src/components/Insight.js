import React from 'react';
import {Line} from 'react-chartjs-2';
import axios from 'axios';
export default class Insight extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      benchPress: {
        labels: [],
        datasets: [
          {
          label: 'Bench Press',
          fill: false,
          lineTension: 0.5,
          backgroundColor: '#862AFE',
          borderColor: '#9E5DFF',
          borderWidth: 2,
          data: []
          }
        ]
      },
      backSquat: {
        labels: [],
        datasets: [
          {
            label: 'Back Squat',
            fill: false,
            lineTension: 0.5,
            backgroundColor: '#862AFE',
            borderColor: '#9E5DFF',
            borderWidth: 2,
            data: []
          }
        ]
      },
      RDL:{
        labels: [],
        datasets: [
          {
            label: 'RDL',
            fill: false,
            lineTension: 0.5,
            backgroundColor: '#862AFE',
            borderColor: '#9E5DFF',
            borderWidth: 2,
            data: []
          }
        ]
      }
    }
  }

  componentDidMount() {
    axios.get("api/insights")
      .then(
        (res) => {

          // bench press labels and data, 6 means 'Bench Press', 3 means 'Back Squat',
          // 4 means 'RDL'
          const labelsBenchPress = res.data.flatMap(item => 
            item[6] ? item.date.slice(5) : []
          );
          const dataBenchPress = res.data.flatMap(item => 
           item[6] ? item[6] : []
          )
          const datasetsBenchPress = this.state.benchPress.datasets.map(
            item => {
              return {
                ...item,
                data: dataBenchPress,
              }})
          // back squat labels and data
          const labelsBackSquat = res.data.flatMap(item => 
            item[3] ? item.date.slice(5) : []
          );
          const dataBackSquat = res.data.flatMap(item => 
           item[3] ? item[3] : []
          )
          const datasetsBackSquat = this.state.backSquat.datasets.map(
            item => {
              return {
                ...item,
                data: dataBackSquat,
              }})
          // RDL labels and data
          const labelsRDL = res.data.flatMap(item => 
            item[4] ? item.date.slice(5) : []
          );
          const dataRDL = res.data.flatMap(item => 
           item[4] ? item[4] : []
          )
          const datasetsRDL = this.state.RDL.datasets.map(
            item => {
              return {
                ...item,
                data: dataRDL,
              }})
          // update the state
          this.setState({
           ...this.state,
           benchPress: {
             ...this.state.benchPress,
             labels: labelsBenchPress,
             datasets: datasetsBenchPress
           },
           backSquat: {
             ...this.state.backSquat,
             labels: labelsBackSquat,
             datasets: datasetsBackSquat
           },
           RDL: {
             ...this.state.RDL,
             labels: labelsRDL,
             datasets: datasetsRDL
           }
          })
        })
        .catch(err => console.log(err));
  }

  render() {
    return (
      <>
      <div style={{height:30 + 'vh'}}>
        <Line
          data={this.state.benchPress}
          options={{
            title:{
              display:true,
              text:'Bench Press Last 10 days',
              fontSize:20
            },
            legend:{
              display:false,
              position:'bottom'
            },
            responsive:true,
            scales: {
              yAxes: [{
                  ticks: {
                      callback: (item) => `${item}lb`
                  }
              }]
              // y: {
              //   min: 200,
              //   max: 250
              // }
          },
          maintainAspectRatio: false,
            animation: {
              tension: {
                  duration: 1000,
                  easing: 'linear',
                  from: 1,
                  to: 0,
                  loop: true
              }
            },
          }}
        />
      </div>
      <div style={{height:30 + 'vh'}}>
      <Line
        data={this.state.backSquat}
        options={{
          title:{
            display:true,
            text:'Back Squat Last 10 days',
            fontSize:20
          },
          legend:{
            display:false,
            position:'bottom'
          },
          responsive:true,
          scales: {
            yAxes: [{
                ticks: {
                    // suggestedMin: 200,
                    // suggestedMax: 250
                    callback: (item) => `${item}lb`
                }
            }]
        },
        maintainAspectRatio: false
        }}
      />
    </div>
    <div style={{height:30 + 'vh'}}>
    <Line
      data={this.state.RDL}
      options={{
        title:{
          display:true,
          text:'RDL Last 10 days',
          fontSize:20
        },
        legend:{
          display:false,
          position:'bottom'
        },
        responsive:true,
        scales: {
          yAxes: [{
              ticks: {
                  // suggestedMin: 200,
                  // suggestedMax: 250
                  callback: (item) => `${item}lb`
              }
          }]
      },
      maintainAspectRatio: false
      }}
    />
  </div>
  </>
    );
  }
}