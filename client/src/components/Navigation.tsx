import React,{ useState } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';
import InsertChartOutlinedOutlinedIcon from '@material-ui/icons/InsertChartOutlinedOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Calendars } from './Calendar';
import { Home } from './Home';
import Insight from './Insight.js';
import { Exercises } from './ExercisesListContainer';
import { WorkoutListContainer } from './WorkoutListContainer';
import '../styles/navigation.scss'

export const Navigation = ():JSX.Element => {
  const [value, setValue] = useState<number>(0);

  return (
    <Router>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        className="navigation-container"
       > 
       {/* renders the hyperlink */}
        <Link to="/home">
        <BottomNavigationAction label="Home" icon={<HomeOutlinedIcon style={{ fontSize: 35, fill:'#FEFFFF' }} />}/>
        </Link>
        <Link to="/today">
          <BottomNavigationAction label="Today" icon={<AssignmentOutlinedIcon fontSize="large" style={{ fill:'#FEFFFF' }}/>}/>
        </Link>
        <Link to="/exercise">
          <BottomNavigationAction label="Exercise" icon={<FitnessCenterIcon fontSize="large" style={{ fill:'#FEFFFF' }}/>}/>
        </Link>
        <Link to="/calendar">
          <BottomNavigationAction label="History" icon={<EventOutlinedIcon fontSize="large" style={{ fill:'#FEFFFF' }}/>}/>
        </Link>
        <Link to="/insight">
          <BottomNavigationAction label="Insight" icon={<InsertChartOutlinedOutlinedIcon fontSize="large" style={{ fill:'#FEFFFF' }}/>}/>
        </Link>
      </BottomNavigation>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/today">
          <WorkoutListContainer/>
        </Route>
        <Route path="/exercise" render={props => <Exercises {...props}/>} />
        <Route path="/calendar">
          <Calendars/>
        </Route>
        <Route path="/insight">
          <Insight/>
        </Route>
      </Switch>
    </Router>
  );
}