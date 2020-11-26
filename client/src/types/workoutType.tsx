export interface IWorkoutExercise {
  name: string,
  id: number
}

export interface IWorkout {
  id: number,
  name: string,
  exercises: IWorkoutExercise[]
} 

export type State = {
  user_id: number,
  workouts: IWorkout[]
}

// state shape example: 
const state = {
  user_id : 1,
  workouts: [
    {
      id: 1,
      name:'workout one',
      exercises: [{
        name:'exercise one',
        id: 1
      },
      {
        name:'exercise two',
        id: 2
      }]
    }
  ]
}