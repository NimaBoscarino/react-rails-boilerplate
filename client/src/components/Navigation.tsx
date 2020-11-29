import React,{ useState } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';
import InsertChartOutlinedOutlinedIcon from '@material-ui/icons/InsertChartOutlinedOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import AccessibilityOutlinedIcon from '@material-ui/icons/AccessibilityOutlined';
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
import Insight from './Insight';
import { NewWorkout } from './NewWorkout/index';
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
        <BottomNavigationAction label="Home" icon={<HomeOutlinedIcon fontSize="large"/>}/>
        </Link>
        <Link to="/today">
          <BottomNavigationAction label="Today" icon={<AssignmentOutlinedIcon fontSize="large"/>}/>
        </Link>
        <Link to="/new-workout">
          <BottomNavigationAction label="New Workout" icon={<FitnessCenterIcon fontSize="large"/>}/>
        </Link>
        <Link to="/calendar">
          <BottomNavigationAction label="Calendar" icon={<EventOutlinedIcon fontSize="large"/>}/>
        </Link>
        <Link to="/insight">
          <BottomNavigationAction label="Insight" icon={<InsertChartOutlinedOutlinedIcon fontSize="large"/>}/>
        </Link>
      </BottomNavigation>
        {/* switch changes view to path */}
      <Switch>
        {/* for this path */}
        <Route path="/home">
          {/* render this component */}
          <Home/>
        </Route>
        <Route path="/today">
          <WorkoutListContainer/>
        </Route>
        <Route path="/new-workout" render={props => <NewWorkout {...props}/>} />
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