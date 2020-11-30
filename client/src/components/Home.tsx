import React from 'react';
import { useHomeData } from '../hooks/useHomeData';
import { Progress } from 'antd';

const colorCode = (sum:number):"success"|"normal"|"exception"|"active" => {
  let status:"success"|"normal"|"exception"|"active" = "success";
  if (sum > 80) {
    status = "success"
  } else if (sum < 80 && sum > 0) {
    status = "normal"
  }
  else if (sum < 1) {
    status = "exception"
  }
return status;
}

const sliceDate = (date:string):string => {
  let result = date.split("").slice(5, 10).join("");
  return result;
}

export const Home = ():React.ReactElement => {
  const weeklyWorkouts = useHomeData();
  console.log(weeklyWorkouts);

  return(
    <>
    <h1>This Weeks Gains</h1>
    <div>
      {weeklyWorkouts.map((day:any) => (
      <Progress type="circle" percent={day["sum"]} width={50} status={colorCode(day["sum"])} format={() => `${sliceDate(day.workout_date)}`} />
      ))}
      </div>
      <div>
      {placeholder.map((day:any) => (
      <Progress percent={50} status={colorCode(day["sum"])}  />
      ))}
      </div>
    </>
  )
}