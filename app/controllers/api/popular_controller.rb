class Api::PopularController < ApplicationController
    def index
        day = whatDayIsIt(Time.now)
        popular_times = Place.find(params[:id]).popular_times.where(day_id:day)
        render :json=>{
            popular_times: popular_times
        }

    end
    def show
        render :json => {
            id: params[:id],
            day: params[:day],
            message: "hello!"
        }
    end
    def getnew
        popular_times = PopularTime.where({day_id: params[:day],hour_id: params[:hour]})
        render :json => {
            popular_times: popular_times
        }
    end
    def getday
        places= Place.select(:id, :lat, :long)
        arr=[]
        places.each{|place|
            popular_times = place.popular_times.select(:busy_value, :hour_id).where(day_id:params[:day]).where("hour_id >= 17 OR hour_id <= 3")
            popular_times_arr=[]
            hash=place.attributes
            popular_times.each{|element| popular_times_arr.push(element.attributes)}
            hash["popular_times"]=popular_times_arr
            arr.push(hash)
        }
        render :json =>{
            popular_times: arr
        }
    end
    def whatDayIsIt(date)
        day = date.wday
        if day == 0
            day += 7
        end
        return day
    end
end
