import React from 'react';
import {ExerciseListItem} from './ExerciseListItem';

const exercises = [
  {
      "id": 2,
      "exercise_name": "Hang Clean",
      "description": "A compound power pull, olympic lift, first component of clean and jerk,\n               consisting of pulling a barbell onto your chest from the floor, then pushing\n                yourself up on the catch.",
      "video_url": "https://thumbs.gfycat.com/CreamyPessimisticCaterpillar-mobile.mp4",
      "thumbnail_image_url": "https://www.mensjournal.com/wp-content/uploads/mf/push-press-the-5-best-barbell-complex-workout-to-burn-fat-and-build-muscle.jpg?quality=86&strip=all&iswp=1",
      "upper_body": true,
      "lower_body": true,
      "force": "pull"
  },
  {
      "id": 3,
      "exercise_name": "High Pull",
      "description": "Pull bar up off floor by extending hips and knees. As bar reaches knees,\n               vigorously raise shoulders while keeping barbell close to thighs, jump upward\n                extending body. Flex elbows out to sides, pulling bar up to mid-chest height.",
      "video_url": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/workouts/2016/03/barbellhighpull-1457038270.gif",
      "thumbnail_image_url": "https://s3.amazonaws.com/prod.skimble/assets/1273681/image_iphone.jpg",
      "upper_body": true,
      "lower_body": true,
      "force": "pull"
  },
  {
      "id": 4,
      "exercise_name": "Front Squat",
      "description": "Descend until knees and hips are fully bent or until thighs are just past parallel to floor.\n               Knees travel outward in direction of toes. Extend knees and hips until legs are straight. \n               Return and repeat.",
      "video_url": "https://thumbs.gfycat.com/SadSpeedyCentipede-max-1mb.gif",
      "thumbnail_image_url": "https://legionathletics.com/wp-content/uploads/2019/05/front-squat-featured.jpg",
      "upper_body": false,
      "lower_body": true,
      "force": "push"
  },
  {
      "id": 5,
      "exercise_name": "Romanian Deadlift \"RDL\"",
      "description": "Lower bar toward top of feet by bending hips while tracing front contour of legs through \n              downward motion. Gradually bend knees through descent and keep spine straight so back is near\n              horizontal at lowest position. Once hamstring is stretched fully just before lowering bar \n              to completely to floor, lift bar by extending hips and knees until standing upright. \n              Pull shoulders back slightly if rounded. Repeat.",
      "video_url": "https://thumbs.gfycat.com/HospitableColdAmericancurl-small.gif",
      "thumbnail_image_url": "https://cdn1.coachmag.co.uk/sites/coachmag/files/2017/07/romanian-deadlift.jpg",
      "upper_body": false,
      "lower_body": true,
      "force": "pull"
  },
  {
      "id": 6,
      "exercise_name": "Push Press",
      "description": "Dip body by bending knees, hips and ankles slightly. Explosively drive upward with legs,\n               driving barbell up off shoulders, vigorously extending arms overhead. Return to shoulders \n               and repeat.",
      "video_url": "https://www.journalmenu.com/wp-content/uploads/2017/11/push-press-gif-oblique-slow-motion-push-press-technique.gif",
      "thumbnail_image_url": "https://i.ytimg.com/vi/X6-DMh-t4nQ/maxresdefault.jpg",
      "upper_body": true,
      "lower_body": true,
      "force": "push"
  },
  {
      "id": 7,
      "exercise_name": "Barbell Bench Press",
      "description": "Lower weight to chest. Press bar upward until arms are extended. Repeat.",
      "video_url": "https://images.squarespace-cdn.com/content/v1/54f9e84de4b0d13f30bba4cb/1529964186692-ZLBRMLV2GDRCTU2V3O9L/ke17ZwdGBToddI8pDm48kK3svdqmw2prsPjqjcUJoBVZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVG_Q82foFXlATZgWeZbKuDWu8UEUHkxgJke7CVwzRQ8vDFvbuqF0GUInBxxtVhBOn4/pause-bench.gif",
      "thumbnail_image_url": "https://cdn2.coachmag.co.uk/sites/coachmag/files/2017/05/bench-press_0.jpg",
      "upper_body": true,
      "lower_body": false,
      "force": "push"
  },
  {
      "id": 8,
      "exercise_name": "Cable Seated Fly",
      "description": "Keeping elbows pointed high, bring cable attachments together in hugging motion with elbows\n               in fixed position. Return to starting position until slight stretch. Repeat.",
      "video_url": "https://i.pinimg.com/originals/f0/5f/6d/f05f6da052a952bc01079b9ffb53f56b.gif",
      "thumbnail_image_url": "https://cdn.muscleandstrength.com/sites/default/files/standing-cable-fly1.jpg",
      "upper_body": true,
      "lower_body": false,
      "force": "push"
  }
]

interface IExercise {
  id: number;
  exercise_name: string;
  description: string;
  video_url: string;
  thumbnail_image_url: string;
  upper_body: boolean;
  lower_body: boolean;
  force: string
}

export const ExerciseList: React.FC = () => {
  return(
    <div>
      {exercises.map((exercise: IExercise) => 
      <ExerciseListItem
        key = {exercise.id}
        exercise_name = {exercise.exercise_name}
        description = {exercise.description}
        video_url = {exercise.video_url}
        thumbnail_image_url = {exercise.thumbnail_image_url}
        upper_body = {exercise.upper_body}
        lower_body = {exercise.lower_body}
        force = {exercise.force}
      />
    )}
    </div>
  )
}