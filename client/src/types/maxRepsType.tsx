export interface IMax {
  // with how we are currently importing 
  //api call for insights, shortcut
  //reusing same structure for hardcoded goals
  "3":number,
  "4":number,
  "6":number,
  date:string
}

export interface IDay {
  workout_date:string,
  sum:number
}

export interface State {
  alldays:IDay[],
  currentProgress:IMax[]
}