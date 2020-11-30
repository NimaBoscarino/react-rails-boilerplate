import React from 'react';

import { Progress } from 'antd';


export const Home = ():React.ReactElement => {
  return(
    <>
      <h1>Home</h1>
      <Progress type="circle" percent={30} width={80} />
      <Progress type="circle" percent={70} width={80} status="exception" />
      <Progress type="circle" percent={100} width={80} />
    </>
  )
}