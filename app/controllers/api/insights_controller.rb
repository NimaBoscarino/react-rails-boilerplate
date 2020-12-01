class Api::InsightsController < ApplicationController
  def index
    exercise = 6
    #4,6,3
    goals_array = [3,4,6]

    sett = Sett.find_by_sql("
      select setts.weight, setts.reps, workouts.workout_date 
      from setts 
      join routines on routines.id=setts.routine_id 
      join workouts on workouts.id=routines.workout_id 
      where routines.exercise_id=#{exercise} 
      order by setts.weight desc")
      #found_set =Sett.where("exercise_id = ?", params[:goals_array])
      
      found_set = Routine.where(exercise_id: exercise).joins("join setts on setts.routine_id=routines.id").joins("join workouts on workouts.id=routines.workout_id").select("workouts.workout_date, setts.weight, setts.reps")
      #we need to group by largest weight on date
      #date(workouts), weight and reps
      #includes(:routines, :workouts).references(:routines)
      # 
      
      m = Sett.find_by_sql("
      select workouts.workout_date as date, max(setts.weight) as max_weight
      from setts
      join routines on routines.id=setts.routine_id
      join workouts on workouts.id=routines.workout_id
      where routines.exercise_id=#{exercise}
      group by workouts.workout_date
      order by date
      ")
    #   m returns something that looks like 
    #   [
    #     {
    #         "id": null,
    #         "date": "2020-11-24",
    #         "max_weight": 155
    #     },
    #     {
    #         "id": null,
    #         "date": "2020-11-25",
    #         "max_weight": 155
    #     },
    #     {
    #         "id": null,
    #         "date": "2020-11-30",
    #         "max_weight": 165
    #     },
    #     {
    #         "id": null,
    #         "date": "2020-12-01",
    #         "max_weight": 175
    #     }
    # ]
       export= m.map{|obj| Routine.where(setts:{weight: obj.max_weight}).where(workouts:{workout_date: obj.date}).where(exercise_id: exercise).joins("join setts on setts.routine_id=routines.id").joins("join workouts on workouts.id=routines.workout_id").select("workouts.workout_date, setts.weight, setts.reps")}
        # returns array of objects, max weight by date
    #    [
    #     {
    #         "id": null,
    #         "workout_date": "2020-11-24",
    #         "weight": 155,
    #         "reps": 10
    #     },
    #     {
    #         "id": null,
    #         "workout_date": "2020-11-25",
    #         "weight": 155,
    #         "reps": 10
    #     },
    #     {
    #         "id": null,
    #         "workout_date": "2020-11-30",
    #         "weight": 165,
    #         "reps": 8
    #     },
    #     {
    #         "id": null,
    #         "workout_date": "2020-12-01",
    #         "weight": 175,
    #         "reps": 6
    #     }
    # ]
 #hardcoding goals, would need to add commas betweenw with split and concat
 #1,2 in group by is a short cut for first two selects
    gets_max = Sett.find_by_sql("
      select workouts.workout_date as date, routines.exercise_id, max(setts.weight) as max_weight
      from setts
      join routines on routines.id=setts.routine_id
      join workouts on workouts.id=routines.workout_id
      where routines.exercise_id IN (3,4,6)
      group by 1,2
      order by date
      ")
      #returns below which is max repr by day for each exercise
    #   [
    #     {
    #         "id": null,
    #         "date": "2020-11-24",
    #         "exercise_id": 3,
    #         "max_weight": 175
    #     },
    #     {
    #         "id": null,
    #         "date": "2020-11-24",
    #         "exercise_id": 4,
    #         "max_weight": 110
    #     },
    #     {
    #         "id": null,
    #         "date": "2020-11-24",
    #         "exercise_id": 6,
    #         "max_weight": 155
    #     },
    #     {
    #         "id": null,
    #         "date": "2020-11-25",
    #         "exercise_id": 6,
    #         "max_weight": 155
    #     },
    #     {
    #         "id": null,
    #         "date": "2020-11-27",
    #         "exercise_id": 3,
    #         "max_weight": 175
    #     },
    #     {
    #         "id": null,
    #         "date": "2020-11-27",
    #         "exercise_id": 4,
    #         "max_weight": 110
    #     },
    #     {
    #         "id": null,
    #         "date": "2020-11-30",
    #         "exercise_id": 4,
    #         "max_weight": 120
    #     },
    #     {
    #         "id": null,
    #         "date": "2020-11-30",
    #         "exercise_id": 6,
    #         "max_weight": 165
    #     },
    #     {
    #         "id": null,
    #         "date": "2020-12-01",
    #         "exercise_id": 3,
    #         "max_weight": 195
    #     },
    #     {
    #         "id": null,
    #         "date": "2020-12-01",
    #         "exercise_id": 4,
    #         "max_weight": 130
    #     },
    #     {
    #         "id": null,
    #         "date": "2020-12-01",
    #         "exercise_id": 6,
    #         "max_weight": 175
    #     },
    #     {
    #         "id": null,
    #         "date": "2020-12-02",
    #         "exercise_id": 3,
    #         "max_weight": 175
    #     }
    # ]
      all_export= gets_max.map{|obj| Routine.where(setts:{weight: obj.max_weight}).where(workouts:{workout_date: obj.date}).where(exercise_id: obj.exercise_id).joins("join setts on setts.routine_id=routines.id").joins("join workouts on workouts.id=routines.workout_id").select("workouts.workout_date, setts.weight, setts.reps, routines.exercise_id")}
      #result looks like 
    #   [
    #     [
    #         {
    #             "id": null,
    #             "exercise_id": 3,
    #             "workout_date": "2020-11-24",
    #             "weight": 175,
    #             "reps": 10
    #         }
    #     ],
    #     [
    #         {
    #             "id": null,
    #             "exercise_id": 4,
    #             "workout_date": "2020-11-24",
    #             "weight": 110,
    #             "reps": 5
    #         }
    #     ],
    #     [
    #         {
    #             "id": null,
    #             "exercise_id": 6,
    #             "workout_date": "2020-11-24",
    #             "weight": 155,
    #             "reps": 10
    #         }
    #     ],
    #     [
    #         {
    #             "id": null,
    #             "exercise_id": 6,
    #             "workout_date": "2020-11-25",
    #             "weight": 155,
    #             "reps": 10
    #         }
    #     ],
    #     [
    #         {
    #             "id": null,
    #             "exercise_id": 3,
    #             "workout_date": "2020-11-27",
    #             "weight": 175,
    #             "reps": 10
    #         }
    #     ],
    #     [
    #         {
    #             "id": null,
    #             "exercise_id": 4,
    #             "workout_date": "2020-11-27",
    #             "weight": 110,
    #             "reps": 10
    #         }
    #     ],
    #     [
    #         {
    #             "id": null,
    #             "exercise_id": 4,
    #             "workout_date": "2020-11-30",
    #             "weight": 120,
    #             "reps": 8
    #         }
    #     ],
    #     [
    #         {
    #             "id": null,
    #             "exercise_id": 6,
    #             "workout_date": "2020-11-30",
    #             "weight": 165,
    #             "reps": 8
    #         }
    #     ],
    #     [
    #         {
    #             "id": null,
    #             "exercise_id": 3,
    #             "workout_date": "2020-12-01",
    #             "weight": 195,
    #             "reps": 6
    #         }
    #     ],
    #     [
    #         {
    #             "id": null,
    #             "exercise_id": 4,
    #             "workout_date": "2020-12-01",
    #             "weight": 130,
    #             "reps": 6
    #         }
    #     ],
    #     [
    #         {
    #             "id": null,
    #             "exercise_id": 6,
    #             "workout_date": "2020-12-01",
    #             "weight": 175,
    #             "reps": 6
    #         }
    #     ],
    #     [
    #         {
    #             "id": null,
    #             "exercise_id": 3,
    #             "workout_date": "2020-12-02",
    #             "weight": 175,
    #             "reps": 10
    #         }
    #     ]
    # ]
    gets_max_ordered = Sett.find_by_sql("
      select workouts.workout_date as date, routines.exercise_id, max(setts.weight) as max_weight
      from setts
      join routines on routines.id=setts.routine_id
      join workouts on workouts.id=routines.workout_id
      where routines.exercise_id IN (3,4,6)
      group by 1,2
      order by 1,2
      ")

      all_export_ordered= gets_max_ordered.map{|obj| Routine.where(setts:{weight: obj.max_weight}).where(workouts:{workout_date: obj.date}).where(exercise_id: obj.exercise_id).joins("join setts on setts.routine_id=routines.id").joins("join workouts on workouts.id=routines.workout_id").select("workouts.workout_date, setts.weight, setts.reps, routines.exercise_id")}

      sett_nick1 = Sett.find_by_sql("
      select workouts.workout_date, max(setts.weight) as max_weight, setts.reps as reps
      from setts
      join routines on routines.id=setts.routine_id
      join workouts on workouts.id=routines.workout_id
      where routines.exercise_id=6
      group by workouts.workout_date, setts.reps
      ")

      
      sett_nick4 = Sett.find_by_sql("
      select workouts.workout_date, max(setts.weight) as max_weight, max(setts.reps) as reps
      from setts
      join routines on routines.id=setts.routine_id
      join workouts on workouts.id=routines.workout_id
      where routines.exercise_id=6
      group by workouts.workout_date
      ")
# output ^^ == \/\/
      #       workout_date | max_weight | reps
        # --------------+------------+------
        #  2020-11-25   |        155 |   12
        #  2020-12-01   |        175 |   12
        #  2020-11-30   |        165 |   12
        #  2020-11-24   |        155 |   12"

   

        #uses Lander Formula for calculation
    def addMax(reps,weight)
      @a=(100 * weight) / (101.3 - 2.67123 * reps)
      @a.floor()
    end
    max_by_day=all_export_ordered.flatten
    #obj.store("max", (addMax(obj.reps, obj.weight)))
    # max_added = max_by_day.map do {|obj| "max"= addMax(obj.reps, obj.weight)}
    #gets converts reps, max into one rep max, by date asc
    three_points= max_by_day.map{|obj| { "rep_max" => addMax(obj.reps, obj.weight), "exercise" => obj.exercise_id, "date" => obj.workout_date}}
    #organizes data so exercise ID is key, max in lbs is value, other key is date, exercise date value
    max_date_day = three_points.map{|obj| { obj["exercise"] => obj["rep_max"], "date" => obj["date"]}}
    ### now data from max_date_day looks like 
  #   [
  #     {
  #         "3": 234,
  #         "date": "2020-11-24"
  #     },
  #     {
  #         "4": 125,
  #         "date": "2020-11-24"
  #     },
  #     {
  #         "6": 207,
  #         "date": "2020-11-24"
  #     },
  #     {
  #         "6": 207,
  #         "date": "2020-11-25"
  #     },
  #     {
  #         "3": 234,
  #         "date": "2020-11-27"
  #     },
  #     {
  #         "4": 147,
  #         "date": "2020-11-27"
  #     },
  #     {
  #         "4": 150,
  #         "date": "2020-11-30"
  #     },
  #     {
  #         "6": 206,
  #         "date": "2020-11-30"
  #     },
  #     {
  #         "3": 228,
  #         "date": "2020-12-01"
  #     },
  #     {
  #         "4": 152,
  #         "date": "2020-12-01"
  #     },
  #     {
  #         "6": 205,
  #         "date": "2020-12-01"
  #     },
  #     {
  #         "3": 234,
  #         "date": "2020-12-02"
  #     }
  # ]
    #   hash= Sett.new
    #   @x = obj.rep_max
    #   @y = obj.date
    #   @z = obj.exercise
    #   @u = "date"
    #   hash[1]=@x
    #   hash[@u]=@y
    #   hash
    # end
    #array is assumed to be an array of objects
    def cooper(array)

      # #@z is results array
      # @z = []
      # #obj is object with key value pairs from max_date_day
      # array.each do |obj|
      #   #if z is empty we add the first object 
      #   if @z == []
      #     @z.push(obj)
      #     #if not we loop through @z
      #   else
      #       @z.each do |inOb|
      #         #if dates match, do a force merge, which overwrites duplicate data
      #         if obj["date"] == inOb["date"]
      #           inOb.merge!(obj)
      #           #if they don't match add that object into the @z array
      #         elsif obj["date"]!=inOb["date"]
      #           @z.push(obj)
      #         end

      #       end
        
      #   end 
      # end
      array.group_by{|object| object["date"]}.map do |k,v|
        #^ shows what that return on line 425
        values = v.map{|ob| ob.except("date")}.reduce(:merge)

        {date: k}.merge(values)
      end
    #will return
      #   {
    #     "2020-11-24": [
    #         {
    #             "3": 234,
    #             "date": "2020-11-24"
    #         },
    #         {
    #             "4": 125,
    #             "date": "2020-11-24"
    #         },
    #         {
    #             "6": 207,
    #             "date": "2020-11-24"
    #         }
    #     ],
    #     "2020-11-25": [
    #         {
    #             "6": 207,
    #             "date": "2020-11-25"
    #         }
    #     ],
    #     "2020-11-27": [
    #         {
    #             "3": 234,
    #             "date": "2020-11-27"
    #         },
    #         {
    #             "4": 147,
    #             "date": "2020-11-27"
    #         }
    #     ],
    #     "2020-11-30": [
    #         {
    #             "4": 150,
    #             "date": "2020-11-30"
    #         },
    #         {
    #             "6": 206,
    #             "date": "2020-11-30"
    #         }
    #     ],
    #     "2020-12-01": [
    #         {
    #             "3": 228,
    #             "date": "2020-12-01"
    #         },
    #         {
    #             "4": 152,
    #             "date": "2020-12-01"
    #         },
    #         {
    #             "6": 205,
    #             "date": "2020-12-01"
    #         }
    #     ],
    #     "2020-12-02": [
    #         {
    #             "3": 234,
    #             "date": "2020-12-02"
    #         }
    #     ]
    # }
    
    
    
    
    # #retun @z array of objects
    # @z.each do |bob|
    #   @z.each do |joe|
    #     if bob["date"]==joe["date"]
    #     bob.merge!(joe)
    #     end
    #   end
    # end

    
    end

    final_array = cooper(max_date_day)

    render json: final_array

  end
end

# for each over each object in array

# compare each object 

