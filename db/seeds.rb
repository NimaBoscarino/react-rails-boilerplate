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
u2=User.create(
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
  thumbnail_image_url: "https://s3.amazonaws.com/prod.skimble/assets/1273681/image_iphone.jpg",
  upper_body: true,
  lower_body: true,
  force: "pull"
)
# remind nick to change front to back squat***
e3=Exercise.create(
  exercise_name: 'Back Squat',
  description: "Descend until knees and hips are fully bent or until thighs are just past parallel to floor.
               Knees travel outward in direction of toes. Extend knees and hips until legs are straight. 
               Return and repeat.",
  video_url: "http://traininggifs.com/wp-content/uploads/2018/11/barbell-squat-straight-down.gif",
  thumbnail_image_url: "https://julielohre.com/wp-content/uploads/2017/11/Barbell-Back-Squat.jpg",
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
##
e8=Exercise.create(
  exercise_name: 'Split Jerk',
  description: "The barbell is driven from shoulders to arms length over head. The lift is complete when feet are in line and bar is under control.",
  video_url: "https://thumbs.gfycat.com/ExhaustedDisfiguredBighornedsheep-small.gif",
  thumbnail_image_url: "http://blog.thewodlife.com.au/wp-content/uploads/2019/01/athlete-performing-split-jerk-768x402.jpg",
  upper_body: true,
  lower_body: true,
  force: "push"
)

e9=Exercise.create(
  exercise_name: 'Snatch',
  description: "The snatch is one coordinated, continuous movement executed with speed. The grip should be wide enough to allow for full squat with bar at arms length over head. Hook grip is used by advanced lifters to maintain grip during snatch. Do not jerk weight from floor; arise steadily then accelerate.",
  video_url: "https://thumbs.gfycat.com/VeneratedHomelyHorsechestnutleafminer-size_restricted.gif",
  thumbnail_image_url: "http://www.strongheartsfitness.com/wp-content/uploads/2016/01/1camilleSnatch-1024x682.jpg",
  upper_body: true,
  lower_body: true,
  force: "pull"
)
e10=Exercise.create(
  exercise_name: 'Military Press',
  description: "Press bar upward until arms are extended overhead. Lower to front of neck and repeat. Feet may be positioned shoulder width apart or one foot in front of other with forward leg slightly bent .",
  video_url: "https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/how-to-do-the-military-press.gif?resize=480:*",
  thumbnail_image_url: "https://legionathletics.com/wp-content/mfl-uploads/2019/02/increase-military-press.jpg",
  upper_body: true,
  lower_body: false,
  force: "push"
)
e11=Exercise.create(
  exercise_name: 'Dumbbell Upright Row',
  description: "Pull dumbells to neck with elbows leading. Allow wrists to flex as bar rises. Lower and repeat.",
  video_url: "https://i.pinimg.com/originals/5f/2a/91/5f2a91500595e19454060e273251adde.gif",
  thumbnail_image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIC98bkWTcC8-lTIij28KV2fzpxmKDQ1ZJ2Q&usqp=CAU",
  upper_body: true,
  lower_body: false,
  force: "pull"
)
e12=Exercise.create(
  exercise_name: 'Dumbbell Fly',
  description: "Lower dumbbells to sides until chest muscles are stretched with elbows fixed in slightly bent position. Bring dumbbells together in wide hugging motion until dumbbells are nearly together. Repeat.",
  video_url: "https://i.makeagif.com/media/4-26-2015/KTZtjN.gif",
  thumbnail_image_url: "https://s3.amazonaws.com/prod.skimble/assets/1267729/image_iphone.jpg",
  upper_body: true,
  lower_body: false,
  force: "push"
)
e13=Exercise.create(
  exercise_name: 'Skull Crusher',
  description: "Lower bar to forehead by bending elbows. Extend arms and repeat.",
  video_url: "https://i.makeagif.com/media/10-08-2015/2uuf48.gif",
  thumbnail_image_url: "https://www.fitfatherproject.com/wp-content/uploads/2019/08/SkullKrushersNT.png",
  upper_body: true,
  lower_body: false,
  force: "push"
)
e14=Exercise.create(
  exercise_name: 'Bicep Curls',
  description: "With elbows to side, raise bar until forearms are vertical. Lower until arms are fully extended. Repeat.",
  video_url: "https://thumbs.gfycat.com/FelineSaltyBat-small.gif",
  thumbnail_image_url: "https://www.muscleandfitness.com/wp-content/uploads/2014/09/Muscular-Bodybuilder-Doing-Biceps-Workout-With-A-Bicep-Curl.jpg?quality=86&strip=all",
  upper_body: true,
  lower_body: false,
  force: "pull"
)
e15=Exercise.create(
  exercise_name: 'Dumbbell Kickback',
  description: "Kneel over bench with arm supporting body. Grasp dumbbell. Position upper arm parallel to floor. Extend arm until it is straight. Return and repeat. Continue with opposite arm.",
  video_url: "https://i.pinimg.com/originals/9f/06/a4/9f06a4d64c2e9c8e69dc4c3c6d8d0f08.gif",
  thumbnail_image_url: "https://fitstop24.com/media/tricep-kickbacks_2.jpg.400x330_q95_crop-%2C_filters-detail.jpg",
  upper_body: true,
  lower_body: false,
  force: "push"
)
e16=Exercise.create(
  exercise_name: 'Dumbbell Triceps Extension',
  description: "With elbows over head, lower forearm behind upper arm by flexing elbows. Flex wrists at bottom to avoid hitting dumbbell on back of neck. Raise dumbbell over head by extending elbows while hyperextending wrists. Return and repeat.",
  video_url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/workouts/2016/03/dumbbelloverheadtricepsextension-1456956005.gif",
  thumbnail_image_url: "https://hips.hearstapps.com/vidthumb/brightcove/57893ed7e694aa370d883017/thumb_1468612312.png",
  upper_body: true,
  lower_body: false,
  force: "push"
)
e17=Exercise.create(
  exercise_name: 'Barbell Sumo Deadlift',
  description: "Pull bar up by driving feet outward, while pulling chest up. Extend knees when bar passes knees. At top of lift, when torso is upright, drive shoulders back and chest up. Return weight to floor by bending hips back and knees pointed outward, while keeping chest high and back straight. Repeat.",
  video_url: "https://thumbs.gfycat.com/ImportantTartBeauceron-small.gif",
  thumbnail_image_url: "https://barbend.com/wp-content/uploads/2017/05/Sumo-DL-1.jpg",
  upper_body: false,
  lower_body: true,
  force: "pull"
)
e18=Exercise.create(
  exercise_name: 'Dumbbell Lunge',
  description: "Lunge forward with first leg. Land on heel then forefoot. Lower body by flexing knee and hip of front leg until knee of rear leg is almost in contact with floor. Return to original standing position by forcibly extending hip and knee of forward leg. Repeat by alternating lunge with opposite leg.",
  video_url: "https://i.imgur.com/ygy5ie3.gif",
  thumbnail_image_url: "https://cdn.muscleandstrength.com/sites/default/files/dumbbell-walking-lunge.jpg",
  upper_body: false,
  lower_body: true,
  force: "push"
)
e19=Exercise.create(
  exercise_name: 'Seated Leg Press',
  description: "Extend knees and hips until knees are fully extended. Return until hips are completely flexed. Repeat.",
  video_url: "https://media1.tenor.com/images/1c2b8ebbeb29f6c474bed7b5287c5937/tenor.gif?itemid=13985833",
  thumbnail_image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Muscle_Strengthening_at_the_Gym_-_Seated_Leg_Press.webm/320px--Muscle_Strengthening_at_the_Gym_-_Seated_Leg_Press.webm.jpg",
  upper_body: false,
  lower_body: true,
  force: "push"
)

Workout.destroy_all
w1 = Workout.create(
  user_id: u1.id,
  workout_date: "2020-11-23",
  workout_name: "Workout 1"
)
w2 = Workout.create(
  user_id: u1.id,
  workout_date: "2020-11-24",
  workout_name: "Workout 2"
)
w3 = Workout.create(
  user_id: u1.id,
  workout_date: "2020-11-26",
  workout_name: "Workout 3"
)
w4 = Workout.create(
  user_id: u1.id,
  workout_date: "2020-11-28",
  workout_name: "Workout 4"
)
w5 = Workout.create(
  user_id: u1.id,
  workout_date: "2020-11-30",
  workout_name: "Workout 5"
)
w6 = Workout.create(
  user_id: u1.id,
  workout_date: "2020-12-01",
  workout_name: "Workout 6"
)
w7 = Workout.create(
  user_id: u1.id,
  workout_date: "2020-12-02",
  workout_name: "Workout 7"
)
w69= Workout.create(
  user_id: u2.id,
  workout_date:"1969-04-20"
)

Routine.destroy_all
r1=Routine.create(
  workout_id: w1.id,
  exercise_id: e1.id,
)
r2=Routine.create(
  workout_id: w1.id,
  exercise_id: e2.id,
)
r3=Routine.create(
  workout_id: w1.id,
  exercise_id: e5.id,
)
r4=Routine.create(
  workout_id: w2.id,
  exercise_id: e4.id,
)
r5=Routine.create(
  workout_id: w2.id,
  exercise_id: e6.id,
)
r6=Routine.create(
  workout_id: w2.id,
  exercise_id: e3.id,
)
r7=Routine.create(
  workout_id: w3.id,
  exercise_id: e7.id,
)
r8=Routine.create(
  workout_id: w3.id,
  exercise_id: e2.id,
)
r9=Routine.create(
  workout_id: w3.id,
  exercise_id: e6.id,
)
r10=Routine.create(
  workout_id: w4.id,
  exercise_id: e4.id,
)
r11=Routine.create(
  workout_id: w4.id,
  exercise_id: e3.id,
)
r12=Routine.create(
  workout_id: w4.id,
  exercise_id: e7.id,
)
r13=Routine.create(
  workout_id: w5.id,
  exercise_id: e6.id,
)
r14=Routine.create(
  workout_id: w5.id,
  exercise_id: e1.id,
)
r15=Routine.create(
  workout_id: w5.id,
  exercise_id: e4.id,
)
r16=Routine.create(
  workout_id: w6.id,
  exercise_id: e3.id,
)
r17=Routine.create(
  workout_id: w6.id,
  exercise_id: e6.id,
)
r18=Routine.create(
  workout_id: w6.id,
  exercise_id: e4.id,
)
r19=Routine.create(
  workout_id: w7.id,
  exercise_id: e3.id,
)
r20=Routine.create(
  workout_id: w7.id,
  exercise_id: e2.id,
)
r21=Routine.create(
  workout_id: w7.id,
  exercise_id: e1.id,
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
#Barbell bench press
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
#routine 2
s4 = Sett.create(
  routine_id:r2.id,
  reps:6,
  rpe:9,
  weight: 145
)
s5 = Sett.create(
  routine_id: r2.id,
  reps: 10,
  rpe: 5, 
  weight: 80
)
s6 = Sett.create(
  routine_id: r2.id,
  reps:10,
  rpe: 7,
  weight: 90
)
#routine 3
s7 = Sett.create(
  routine_id: r3.id,
  reps:10,
  rpe:7,
  weight: 100
)
s8 = Sett.create(
  routine_id:r3.id,
  reps:9,
  rpe:8,
  weight: 110
)
s9 = Sett.create(
  routine_id: r3.id,
  reps: 10,
  rpe: 5, 
  weight: 80
)
#routine 4 RDL
s10 = Sett.create(
  routine_id: r4.id,
  reps:8,
  rpe: 7,
  weight: 90
)
s11 = Sett.create(
  routine_id: r4.id,
  reps:7,
  rpe:9,
  weight: 100
)
s12 = Sett.create(
  routine_id:r4.id,
  reps:5,
  rpe:9,
  weight: 110
)
#routine 5 BBP
s13 = Sett.create(
  routine_id: r5.id,
  reps: 12,
  rpe: 5, 
  weight: 95
)
s14 = Sett.create(
  routine_id: r5.id,
  reps:10,
  rpe: 6,
  weight: 135
)
s15 = Sett.create(
  routine_id: r5.id,
  reps:10,
  rpe:8,
  weight: 155
)
#routine 6 FS
s16 = Sett.create(
  routine_id:r6.id,
  reps:12,
  rpe:8,
  weight: 135
)
s17 = Sett.create(
  routine_id: r6.id,
  reps: 10,
  rpe: 5, 
  weight: 155
)
s18 = Sett.create(
  routine_id: r6.id,
  reps:10,
  rpe: 8,
  weight: 175
)
#routine 7
s19 = Sett.create(
  routine_id: r7.id,
  reps:9,
  rpe:9,
  weight: 155
)
s20 = Sett.create(
  routine_id: r7.id,
  reps:6,
  rpe:9,
  weight: 175
)
s21 = Sett.create(
  routine_id: r7.id,
  reps: 12,
  rpe: 7, 
  weight: 80
)
#routine 8
s22 = Sett.create(
  routine_id: r8.id,
  reps:12,
  rpe: 8,
  weight: 90
)
s23 = Sett.create(
  routine_id: r8.id,
  reps:12,
  rpe:8,
  weight: 100
)
s24 = Sett.create(
  routine_id: r8.id,
  reps:12,
  rpe:8,
  weight: 100
)
#routine 9 BBP
s25 = Sett.create(
  routine_id: r9.id,
  reps: 12,
  rpe: 6, 
  weight: 95
)
s26 = Sett.create(
  routine_id: r9.id,
  reps:10,
  rpe: 7,
  weight: 135
)
s27 = Sett.create(
  routine_id: r9.id,
  reps:10,
  rpe:9,
  weight: 155
)
#routine 10 RDL
s28 = Sett.create(
  routine_id:r10.id,
  reps:10,
  rpe:9,
  weight: 90
)
s29 = Sett.create(
  routine_id: r10.id,
  reps: 10,
  rpe: 5, 
  weight: 100
)
s30 = Sett.create(
  routine_id: r10.id,
  reps:10,
  rpe: 7,
  weight: 110
)
#routine 11 FS
s31 = Sett.create(
  routine_id: r11.id,
  reps:12,
  rpe:7,
  weight: 95
)
s32 = Sett.create(
  routine_id:r11.id,
  reps:10,
  rpe:8,
  weight: 155
)
s33 = Sett.create(
  routine_id: r11.id,
  reps: 10,
  rpe: 5, 
  weight: 175
)
#routine 12
s34 = Sett.create(
  routine_id: r12.id,
  reps:8,
  rpe: 7,
  weight: 90
)
s35 = Sett.create(
  routine_id: r12.id,
  reps:7,
  rpe:9,
  weight: 100
)
s36 = Sett.create(
  routine_id:r12.id,
  reps:5,
  rpe:9,
  weight: 120
)
#routine 13 BBP
s37 = Sett.create(
  routine_id:r13.id,
  reps:12,
  rpe:9,
  weight: 95
)
s38 = Sett.create(
  routine_id:r13.id,
  reps:10,
  rpe:9,
  weight: 135
)
s39 = Sett.create(
  routine_id:r13.id,
  reps:8,
  rpe:9,
  weight: 165
)
#routine 14
s40 = Sett.create(
  routine_id:r14.id,
  reps:5,
  rpe:9,
  weight: 120
)
s41 = Sett.create(
  routine_id:r14.id,
  reps:5,
  rpe:9,
  weight: 120
)
s42 = Sett.create(
  routine_id:r14.id,
  reps:5,
  rpe:9,
  weight: 120
)
#routine 15 RDL
s43 = Sett.create(
  routine_id:r15.id,
  reps:12,
  rpe:9,
  weight: 80
)
s44 = Sett.create(
  routine_id:r15.id,
  reps:10,
  rpe:9,
  weight: 100
)
s45 = Sett.create(
  routine_id:r15.id,
  reps:8,
  rpe:9,
  weight: 120
)
#routine 16 FS
s46 = Sett.create(
  routine_id:r16.id,
  reps:10,
  rpe:9,
  weight: 115
)
s47 = Sett.create(
  routine_id:r16.id,
  reps:8,
  rpe:9,
  weight: 155
)
s48 = Sett.create(
  routine_id:r16.id,
  reps:6,
  rpe:9,
  weight: 195
)
#routine 17 BBP
s49 = Sett.create(
  routine_id:r17.id,
  reps:10,
  rpe:9,
  weight: 95
)
s50 = Sett.create(
  routine_id:r17.id,
  reps:8,
  rpe:9,
  weight: 135
)
s51 = Sett.create(
  routine_id:r17.id,
  reps:6,
  rpe:9,
  weight: 175
)
#routine 18 RDL
s52 = Sett.create(
  routine_id:r18.id,
  reps:10,
  rpe:9,
  weight: 100
)
s53 = Sett.create(
  routine_id:r18.id,
  reps:8,
  rpe:9,
  weight: 120
)
s54 = Sett.create(
  routine_id:r18.id,
  reps:6,
  rpe:9,
  weight: 130
)
#routine 19 FS
s55 = Sett.create(
  routine_id:r19.id,
  reps:10,
  rpe:9,
  weight: 135
)
s56 = Sett.create(
  routine_id:r19.id,
  reps:10,
  rpe:9,
  weight: 155
)
s57 = Sett.create(
  routine_id:r19.id,
  reps:10,
  rpe:9,
  weight: 175
)
#routine 20
s58 = Sett.create(
  routine_id:r20.id,
  reps:5,
  rpe:9,
  weight: 120
)
s59 = Sett.create(
  routine_id:r20.id,
  reps:5,
  rpe:9,
  weight: 120
)
s60 = Sett.create(
  routine_id:r20.id,
  reps:5,
  rpe:9,
  weight: 120
)
#routine 21
s61 = Sett.create(
  routine_id:r21.id,
  reps:5,
  rpe:9,
  weight: 120
)
s62 = Sett.create(
  routine_id:r21.id,
  reps:5,
  rpe:9,
  weight: 120
)
s63 = Sett.create(
  routine_id:r21.id,
  reps:5,
  rpe:9,
  weight: 120
)