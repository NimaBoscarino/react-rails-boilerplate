class CreateJoinTableExerciseMuscle < ActiveRecord::Migration[5.2]
  def change
    create_join_table :exercises, :muscles do |t|
      # t.index [:exercise_id, :muscle_id]
      # t.index [:muscle_id, :exercise_id]
    end
    rename_table :workout_sessions, :workouts
  end
end
