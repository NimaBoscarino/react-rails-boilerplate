interface IWorkout {
  id:number,
  date:string,
  name:string,
  exercises:[]
}

export const getWorkoutsByDate = (allWorkouts:IWorkout[], date:string):IWorkout[] => {
  const workouts = allWorkouts.filter(workout => workout.date === date)
  return workouts;
}


