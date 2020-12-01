class Api::HomesController < ApplicationController
  def index
    sett = Sett.find_by_sql("select sum(setts.reps), workouts.workout_date 
    from setts 
    join routines 
    on routines.id = setts.routine_id 
    join workouts 
    on workouts.id = routines.workout_id 
    group by workouts.workout_date")
    
    last_7_days = 6.days.ago.to_date..Time.now.in_time_zone('Pacific Time (US & Canada)').to_date
    
    sum_each_day = sett.reduce(Hash.new(0)) do |acc, item|
      acc.merge(item[:workout_date] => item[:sum])
    end

    dates_sum = last_7_days.map do |day|
      { workout_date: day.to_s, sum: sum_each_day[day] }
    end
    
    render json: dates_sum
  end
end
