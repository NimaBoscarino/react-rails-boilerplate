class CreateJoinTableExerciseMuscle < ActiveRecord::Migration[5.2]
  def change
    create_join_table :exercises, :muscles do |t|
      # t.index [:exercise_id, :muscle_id]
      # t.index [:muscle_id, :exercise_id]
    end
    rename_table :workout_sessions, :workouts
    rename_table :user_exercises_for_sessions, :user_exercises_for_workout
    drop_table :artists_musics
  end
end
