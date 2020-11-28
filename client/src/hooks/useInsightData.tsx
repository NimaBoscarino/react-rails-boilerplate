export const confidence = [
  {
    year: 1993, tvNews: 19, church: 29, military: 32,
  }, {
    year: 1995, tvNews: 13, church: 32, military: 33,
  }, {
    year: 1997, tvNews: 14, church: 35, military: 30,
  }, {
    year: 1999, tvNews: 13, church: 32, military: 34,}
];

import React, { useEffect } from 'react';
import axios from 'axios';

const useInsightData = ():any => {
  let insight:any = [];
  let test:any = [];

  axios.get('/api/insights')
  .then(res => {
    insight = [...res.data];
    test = res.data
  })
  .catch(err => console.log(err))
  
  console.log('..............');
  console.log(insight);
  console.log(test);
  // why insight is empty ????
  return insight;
}