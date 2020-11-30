import React from 'react';
import { useHomeData } from '../hooks/useHomeData';
import { Progress } from 'antd';


export const Home = ():React.ReactElement => {
  const weeklyWorkouts = useHomeData();
  console.log(weeklyWorkouts);
  return(
      weeklyWorkouts.map((day:any) => (
    <>
      <Progress type="circle" percent={day["sum"]} width={80} format={() => `${day.workout_date}`} />
    </>
  ))
  )
}