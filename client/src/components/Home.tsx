import React from 'react';
import { useHomeData } from '../hooks/useHomeData';
import { Progress } from 'antd';
import {IDay, IMax, State} from '../types/maxRepsType';
import { Title } from './Title';

//color code chagnes weeklyc ircle color based on total reps by day
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
// cuts off year from date 
const sliceDate = (date:string):string => {
  let result = date.split("").slice(5, 10).join("");
  return result;
}
//getting highest, not current max squat
const getOneRepMaxSquat = (currentProgress:IMax[]) => {
  let oneRepMax = 0;
  currentProgress.forEach((element, index, array) => {
    if (element["3"] > oneRepMax) {
      oneRepMax = element["3"];
    }
  })
  return oneRepMax;
}
//same for RDL
const getOneRepMaxRDL = (currentProgress:IMax[]) => {
  let oneRepMax = 0;
  currentProgress.forEach((element, index, array) => {
    if (element["4"] > oneRepMax) {
      oneRepMax = element["4"];
    }
  })
  return oneRepMax;
}
//dame for bench, currently hardcoded, wil be updated
const getOneRepMaxBench = (currentProgress:IMax[]) => {
  let oneRepMax = 0;
  currentProgress.forEach((element, index, array) => {
    if (element["6"] > oneRepMax) {
      oneRepMax = element["6"];
    }
  })
  return oneRepMax;
}
// returns current three lift sum
const thousandPoundClub = (num1:number, num2:number, num3:number) => {
  let result = num1 + num2 + num3;
  return result;
}
//potential area of refactor, push max reps of goal to array, then map over arraywith function, great for MVD
// next four convert max rep to pecentage based on hard coded goal, once we are able to input goals will modify accordingly
const bpConverter = (num:number) => {
  let result = Math.round(num / 240 * 100);
  return result;
}

const bsConverter = (num:number) => {
  let result = Math.round(num / 325 * 100);
  return result;
}

const rdlConverter = (num:number) => {
  let result = Math.round(num / 435 * 100);
  return result;
}


const tPCConverter = (num:number) => {
  let result = Math.round(num / 10);
  return result;
}
export const Home = ():React.ReactElement => {
  const {allDays, currentProgress} = useHomeData();
  console.log(allDays);
  console.log(currentProgress);

  return(
    <>
    <Title text={'WELCOME GAINS'} />
    <div>
      {allDays.map((day:any) => (
      <Progress type="circle" percent={day["sum"]} width={50} status={colorCode(day["sum"])} format={() => `${sliceDate(day.workout_date)}`} />
      ))}
      </div>
      { <div>
      {/* all goals currely hardcoded */}
      <br/>
      <br/>
      <h2>Goal: One Rep Max</h2>
      <h3>Bench Press Goal: 240</h3>
      {/* go over wording as number represent current pr,not what currently lifting */}
      <p>Currently lifting: {getOneRepMaxBench(currentProgress)}</p>
      <Progress percent={bpConverter(getOneRepMaxBench(currentProgress))} status="active" />
      <br/>
      <br/>
      <h3>Back Squat Goal: 325</h3>
      <p>Currently lifting: {getOneRepMaxSquat(currentProgress)}</p>
      <Progress percent={bsConverter(getOneRepMaxSquat(currentProgress))} status="active" /> 
      <br/>
      <br/>
      <h3>RDL Goal: 435</h3>
      <p>Currently lifting: {getOneRepMaxRDL(currentProgress)}</p>
      <Progress percent={rdlConverter(getOneRepMaxRDL(currentProgress))} status="active" />
      <br/>
      <br/>
      <h3>1000 lb Club</h3>
      <p>Currently lifting: {thousandPoundClub(getOneRepMaxBench(currentProgress),getOneRepMaxSquat(currentProgress),getOneRepMaxRDL(currentProgress))} </p>
      <Progress percent={tPCConverter(thousandPoundClub(getOneRepMaxBench(currentProgress),getOneRepMaxSquat(currentProgress),getOneRepMaxRDL(currentProgress)))} status="active" /> 
      </div> }
    </>
  )
}