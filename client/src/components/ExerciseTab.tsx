import React from 'react';
import { makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  nav: {
    backgroundColor: '#1990FF',
  },
  indicator: {
    backgroundColor: '#9E5DFF',
  }
}));

export const ExerciseTab = (props:any) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.nav}>
        <Tabs 
          value={value} 
          onChange={handleChange} 
          classes={{
            indicator: classes.indicator
          }}
        >
          <Tab label="Description" {...a11yProps(0)} />
          {/* <Tab label="About" {...a11yProps(1)} /> */}
          <Tab label="Video" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <img src={props.thumbnail_image_url} alt="No image" width="250px" height="270px"/>
        <br/>
        {props.description}
      </TabPanel>
      {/* <TabPanel value={value} index={1}>
        {props.force}
      </TabPanel> */}
      <TabPanel value={value} index={1}>
        <video width="250px" height="270px" autoPlay>
          <source src={props.video_url} type="video/mp4"/>
        </video>
      </TabPanel>
    </div>
  );
}
