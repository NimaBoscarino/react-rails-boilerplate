import React,{ useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';
import InsertChartOutlinedOutlinedIcon from '@material-ui/icons/InsertChartOutlinedOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import AccessibilityOutlinedIcon from '@material-ui/icons/AccessibilityOutlined';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Calendar from './Calendar/index';
import Home from './Home/index';
import Today from './Today/index';
import Insight from './Insight/index';
import NewSession from './NewSession/index';


const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function Navigation() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  return (
    <Router>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Home" icon={<AccessibilityOutlinedIcon />}>
          <Link to="/home"></Link>
        </BottomNavigationAction>
        <BottomNavigationAction label="Today" icon={<AssignmentOutlinedIcon />}>
          <Link to="/today"></Link>
        </BottomNavigationAction>
        <BottomNavigationAction label="New Session" icon={<AddCircleOutlineOutlinedIcon />}>
          <Link to="/new-session"></Link>
        </BottomNavigationAction>
        <BottomNavigationAction label="Calendar" icon={<EventOutlinedIcon />}>
          <Link to="/calendar"></Link>
        </BottomNavigationAction>
        <BottomNavigationAction label="Insight" icon={<InsertChartOutlinedOutlinedIcon />}>
          <Link to="/insight"></Link>
        </BottomNavigationAction>
      </BottomNavigation>

      <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/today">
            <Today/>
          </Route>
          <Route path="/new-session">
            <NewSession/>
          </Route>
          <Route path="/calendar">
            <Calendar/>
          </Route>
          <Route path="/insight">
            <Insight/>
          </Route>
        </Switch>

    </Router>


  );
}