import React,{ useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';
import InsertChartOutlinedOutlinedIcon from '@material-ui/icons/InsertChartOutlinedOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import AccessibilityOutlinedIcon from '@material-ui/icons/AccessibilityOutlined';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function Navigation() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Home" icon={<AccessibilityOutlinedIcon />} />
      <BottomNavigationAction label="Today" icon={<AssignmentOutlinedIcon />} />
      <BottomNavigationAction label="New Session" icon={<AddCircleOutlineOutlinedIcon />} />
      <BottomNavigationAction label="Calendar" icon={<EventOutlinedIcon />} />
      <BottomNavigationAction label="Insight" icon={<InsertChartOutlinedOutlinedIcon />} />
    </BottomNavigation>
  );
}