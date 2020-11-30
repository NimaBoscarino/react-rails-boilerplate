import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  LineSeries,
  Title,
} from '@devexpress/dx-react-chart-material-ui';
import { ArgumentScale } from '@devexpress/dx-react-chart';
import { withStyles } from '@material-ui/core/styles';
import { Animation } from '@devexpress/dx-react-chart';
import axios from 'axios';
//not sure what this does, if anything
import {scaleBand} from '@devexpress/dx-chart-core';

const format = () => tick => tick;
// const legendStyles = () => ({
//   root: {
//     display: 'flex',
//     margin: 'auto',
//     flexDirection: 'row',
//   },
// });
// const legendLabelStyles = theme => ({
//   label: {
//     paddingTop: theme.spacing(1),
//     whiteSpace: 'nowrap',
//   },
// });
// const legendItemStyles = () => ({
//   item: {
//     flexDirection: 'column',
//   },
// });

// const legendRootBase = ({ classes, ...restProps }) => (
//   <Legend.Root {...restProps} className={classes.root} />
// );
// const legendLabelBase = ({ classes, ...restProps }) => (
//   <Legend.Label className={classes.label} {...restProps} />
// );
// const legendItemBase = ({ classes, ...restProps }) => (
//   <Legend.Item className={classes.item} {...restProps} />
// );
// const Root = withStyles(legendStyles, { name: 'LegendRoot' })(legendRootBase);
// const Label = withStyles(legendLabelStyles, { name: 'LegendLabel' })(legendLabelBase);
// const Item = withStyles(legendItemStyles, { name: 'LegendItem' })(legendItemBase);
const demoStyles = () => ({
  chart: {
    paddingRight: '20px',
  },
  lastChart: {
    paddingRight: '20px',
    marginBottom: '90px'
  },
  title: {
    whiteSpace: 'pre',
  },
});

const ValueLabel = (props) => {
  const { text } = props;
  return (
    <ValueAxis.Label
      {...props}
      text={`${text}lb`}
    />
  );
};

const titleStyles = {
  title: {
    whiteSpace: 'pre',
  },
};
const TitleText = withStyles(titleStyles)(({ classes, ...props }) => (
  <Title.Text {...props} className={classes.title} />
));

class Demo extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      insight:[]
    };
  }

  componentDidMount() {
    axios.get("api/insights")
      .then(
        (res) => {
          console.log(res.data);
          this.setState({
            insight: res.data,
          });
        })
        .catch(err => console.log(err));
  }

  render() {
    const { insight: chartData } = this.state;
    const { classes } = this.props;

    return (
      <Paper>
        <Chart
          data={chartData}
          className={classes.chart}
        >
          <ArgumentAxis 
            tickFormat={format} 
          />
          <ValueAxis
            max={500}
            
            labelComponent={ValueLabel}
          />
          {/* <ArgumentScale
            factory={()=>{
               let range=[0,300]
              
            } }
          /> */}
          {/* <ArgumentScale
            factory={scaleBand}
          /> */}
          <LineSeries
            name="Front Squat"
            valueField="3"
            argumentField="date"
          />
          {/* <LineSeries
            name="Church"
            valueField="church"
            argumentField="year"
          /> */}
          {/* <LineSeries
            name="Military"
            valueField="military"
            argumentField="year"
          /> */}
          {/* <Legend position="bottom" rootComponent={Root} itemComponent={Item} labelComponent={Label} /> */}
          <Title
            text={`Front Squat ${'\n'}(Second line)`}
            textComponent={TitleText}
          />
          <Animation />
        </Chart>

        <Chart
          data={chartData}
          className={classes.chart}
        >
          <ArgumentAxis tickFormat={format} />
          <ValueAxis
            max={50}
            labelComponent={ValueLabel}
          />

          <LineSeries
            name="RDL"
            valueField="4"
            argumentField="date"
          />
          <Title
            text={`RDL ${'\n'}(Second line)`}
            textComponent={TitleText}
          />
          <Animation />
        </Chart>

        <Chart
          data={chartData}
          className={classes.lastChart}
        >
          <ArgumentAxis tickFormat={format} />
          <ValueAxis
            max={50}
            labelComponent={ValueLabel}
          />
          <LineSeries
            name="Bar Bell Bench Press"
            valueField="6"
            argumentField="date"
          />
          <Title
            text={`Bar Bell Bench Press${'\n'}(Second line)`}
            textComponent={TitleText}
          />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}

export default withStyles(demoStyles, { name: 'Demo' })(Demo);
