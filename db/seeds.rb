# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
u1=User.create(
  customer_name: 'Chad',
  email: "chad@google.com",
  password: "chadrocks",
  height: 160,
  weight: 200
)
User.create(
  customer_name: 'Brad',
  email: "brad@google.com",
  password: "bradrocks",
  height: 150,
  weight: 210
)

Muscle.destroy_all
m1=Muscle.create(muscle_name: 'Traps', muscle_group: "Shoulders")
m2=Muscle.create(muscle_name: 'Hamstrings', muscle_group: "Legs")
m3=Muscle.create(muscle_name: 'Glutes', muscle_group: "Legs")
m4=Muscle.create(muscle_name: 'Quadriceps', muscle_group: "Legs")
m5=Muscle.create(muscle_name: 'Spinal Erectors', muscle_group: "Back")
m6=Muscle.create(muscle_name: 'Lats', muscle_group: "Back")
m7=Muscle.create(muscle_name: 'Forearms', muscle_group: "Arms")
m8=Muscle.create(muscle_name: 'Biceps', muscle_group: "Arms")
m9=Muscle.create(muscle_name: 'Calves', muscle_group: "Legs")
m10=Muscle.create(muscle_name: 'Upper Back', muscle_group: "Back")
m11=Muscle.create(muscle_name: 'Back', muscle_group: "Back")
m12=Muscle.create(muscle_name: 'Lower Back', muscle_group: "Back")
m13=Muscle.create(muscle_name: 'Triceps', muscle_group: "Arms")
m14=Muscle.create(muscle_name: 'Chest', muscle_group: "Chest")
m15=Muscle.create(muscle_name: 'Hips', muscle_group: "Core")
m16=Muscle.create(muscle_name: 'Shoulders', muscle_group: "Shoulders")
m17=Muscle.create(muscle_name: 'Pecs', muscle_group: "Chest")
m18=Muscle.create(muscle_name: 'Abs', muscle_group: "Core")
m19=Muscle.create(muscle_name: 'Oblique', muscle_group: "Core")
m20=Muscle.create(muscle_name: 'Delts', muscle_group: "Shoulders")
m21=Muscle.create(muscle_name: 'Chest', muscle_group: "Chest")

Exercise.destroy_all
e1=Exercise.create(
  exercise_name: 'Hang Clean',
  description: "A compound power pull, olympic lift, first component of clean and jerk,
               consisting of pulling a barbell onto your chest from the floor, then pushing
                yourself up on the catch.",
  video_url:"https://thumbs.gfycat.com/CreamyPessimisticCaterpillar-mobile.mp4",
  thumbnail_image_url: "https://www.mensjournal.com/wp-content/uploads/mf/push-press-the-5-best-barbell-complex-workout-to-burn-fat-and-build-muscle.jpg?quality=86&strip=all&iswp=1",
  upper_body: true,
  lower_body: true,
  force: "pull"
)

e2=Exercise.create(
  exercise_name: 'High Pull',
  description: "Pull bar up off floor by extending hips and knees. As bar reaches knees,
               vigorously raise shoulders while keeping barbell close to thighs, jump upward
                extending body. Flex elbows out to sides, pulling bar up to mid-chest height.",
  video_url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/workouts/2016/03/barbellhighpull-1457038270.gif",
  thumbnail_image_url: "https://s3.amazonaws.com/prod.skimble/asSet/1273681/image_iphone.jpg",
  upper_body: true,
  lower_body: true,
  force: "pull"
)

e3=Exercise.create(
  exercise_name: 'Front Squat',
  description: "Descend until knees and hips are fully bent or until thighs are just past parallel to floor.
               Knees travel outward in direction of toes. Extend knees and hips until legs are straight. 
               Return and repeat.",
  video_url: "https://thumbs.gfycat.com/SadSpeedyCentipede-max-1mb.gif",
  thumbnail_image_url: "https://legionathletics.com/wp-content/uploads/2019/05/front-squat-featured.jpg",
  upper_body: false,
  lower_body: true,
  force: "push"
)

e4=Exercise.create(
  exercise_name: 'Romanian Deadlift "RDL"',
  description: "Lower bar toward top of feet by bending hips while tracing front contour of legs through 
              downward motion. Gradually bend knees through descent and keep spine straight so back is near
              horizontal at lowest position. Once hamstring is stretched fully just before lowering bar 
              to completely to floor, lift bar by extending hips and knees until standing upright. 
              Pull shoulders back slightly if rounded. Repeat.",
  video_url: "https://thumbs.gfycat.com/HospitableColdAmericancurl-small.gif",
  thumbnail_image_url: "https://cdn1.coachmag.co.uk/sites/coachmag/files/2017/07/romanian-deadlift.jpg",
  upper_body: false,
  lower_body: true,
  force: "pull"
)

e5=Exercise.create(
  exercise_name: 'Push Press',
  description: "Dip body by bending knees, hips and ankles slightly. Explosively drive upward with legs,
               driving barbell up off shoulders, vigorously extending arms overhead. Return to shoulders 
               and repeat.",
  video_url: "https://www.journalmenu.com/wp-content/uploads/2017/11/push-press-gif-oblique-slow-motion-push-press-technique.gif",
  thumbnail_image_url: "https://i.ytimg.com/vi/X6-DMh-t4nQ/maxresdefault.jpg",
  upper_body: true,
  lower_body: true,
  force: "push"
)

e6=Exercise.create(
  exercise_name: 'Barbell Bench Press',
  description: "Lower weight to chest. Press bar upward until arms are extended. Repeat.",
  video_url: "https://images.squarespace-cdn.com/content/v1/54f9e84de4b0d13f30bba4cb/1529964186692-ZLBRMLV2GDRCTU2V3O9L/ke17ZwdGBToddI8pDm48kK3svdqmw2prsPjqjcUJoBVZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVG_Q82foFXlATZgWeZbKuDWu8UEUHkxgJke7CVwzRQ8vDFvbuqF0GUInBxxtVhBOn4/pause-bench.gif",
  thumbnail_image_url: "https://cdn2.coachmag.co.uk/sites/coachmag/files/2017/05/bench-press_0.jpg",
  upper_body: true,
  lower_body: false,
  force: "push"
)

e7=Exercise.create(
  exercise_name: 'Cable Seated Fly',
  description: "Keeping elbows pointed high, bring cable attachments together in hugging motion with elbows
               in fixed position. Return to starting position until slight stretch. Repeat.",
  video_url: "https://i.pinimg.com/originals/f0/5f/6d/f05f6da052a952bc01079b9ffb53f56b.gif",
  thumbnail_image_url: "https://cdn.muscleandstrength.com/sites/default/files/standing-cable-fly1.jpg",
  upper_body: true,
  lower_body: false,
  force: "push"
)

Workout.destroy_all
w1 = Workout.create(
  user_id: u1.id,
  workout_date: Date.today
)
Routine.destroy_all
r1=Routine.create(
  workout_id: w1.id,
  exercise_id: e1.id,
  workout_notes: "YEAH BUDDY"
)

r2=Routine.create(
  workout_id: w1.id,
  exercise_id: e2.id,
)
r3=Routine.create(
  workout_id: w1.id,
  exercise_id: e5.id,
)

Exercisemuscle.destroy_all
#Hang clean
em1 = Exercisemuscle.create(
  exercise_id: e1.id,
  muscle_id: m1.id
)
em2 = Exercisemuscle.create(
  exercise_id: e1.id,
  muscle_id: m2.id
)
em3 = Exercisemuscle.create(
  exercise_id: e1.id,
  muscle_id: m3.id
)
em4 = Exercisemuscle.create(
  exercise_id: e1.id,
  muscle_id: m4.id
)
em5 = Exercisemuscle.create(
  exercise_id: e1.id,
  muscle_id: m5.id
)
em6 = Exercisemuscle.create(
  exercise_id: e1.id,
  muscle_id: m6.id
)
em7 = Exercisemuscle.create(
  exercise_id: e1.id,
  muscle_id: m7.id
)
em8 = Exercisemuscle.create(
  exercise_id: e1.id,
  muscle_id: m8.id
)
em9 = Exercisemuscle.create(
  exercise_id: e1.id,
  muscle_id: m9.id
)

#High pull
em10 = Exercisemuscle.create(
  exercise_id: e2.id,
  muscle_id: m3.id
)
em11 = Exercisemuscle.create(
  exercise_id: e2.id,
  muscle_id: m2.id
)
em12 = Exercisemuscle.create(
  exercise_id: e2.id,
  muscle_id: m11.id
)

#Front squat
em13 = Exercisemuscle.create(
  exercise_id: e3.id,
  muscle_id: m4.id
)
em14 = Exercisemuscle.create(
  exercise_id: e3.id,
  muscle_id: m10.id
)

#RDL
em15 = Exercisemuscle.create(
  exercise_id: e4.id,
  muscle_id: m2.id
)
em16 = Exercisemuscle.create(
  exercise_id: e4.id,
  muscle_id: m3.id
)
em17 = Exercisemuscle.create(
  exercise_id: e4.id,
  muscle_id: m7.id
)

#Push press
em18 = Exercisemuscle.create(
  exercise_id: e5.id,
  muscle_id: m3.id
)
em19 = Exercisemuscle.create(
  exercise_id: e5.id,
  muscle_id: m2.id
)
em20 = Exercisemuscle.create(
  exercise_id: e5.id,
  muscle_id: m4.id
)
em21 = Exercisemuscle.create(
  exercise_id: e5.id,
  muscle_id: m18.id
)
em22 = Exercisemuscle.create(
  exercise_id: e5.id,
  muscle_id: m20.id
)
em23 = Exercisemuscle.create(
  exercise_id: e5.id,
  muscle_id: m1.id
)
em24 = Exercisemuscle.create(
  exercise_id: e5.id,
  muscle_id: m13.id
)
em25 = Exercisemuscle.create(
  exercise_id: e5.id,
  muscle_id: m7.id
)

#6 barbell bench press
em26 = Exercisemuscle.create(
  exercise_id: e6.id,
  muscle_id: m16.id
)
em27 = Exercisemuscle.create(
  exercise_id: e6.id,
  muscle_id: m17.id
)
em28 = Exercisemuscle.create(
  exercise_id: e6.id,
  muscle_id: m13.id
)
em29 = Exercisemuscle.create(
  exercise_id: e6.id,
  muscle_id: m4.id
)
em30 = Exercisemuscle.create(
  exercise_id: e6.id,
  muscle_id: m15.id
)
#Cable Seated Fly
em31 = Exercisemuscle.create(
  exercise_id: e7.id,
  muscle_id: m17.id
)

#Sets
Sett.destroy_all
s1 = Sett.create(
  routine_id: r1.id,
  reps: 10,
  rpe: 6, 
  weight: 95
)
puts s1.inspect

s2 = Sett.create(
  routine_id: r1.id,
  reps:10,
  rpe: 7,
  weight: 105
)

s3 = Sett.create(
  routine_id: r1.id,
  reps:9,
  rpe:9,
  weight: 135
)

s4 = Sett.create(
  routine_id:r1.id,
  reps:6,
  rpe:9,
  weight: 145
)

