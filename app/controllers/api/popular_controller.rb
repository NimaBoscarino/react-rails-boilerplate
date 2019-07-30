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
    def whatDayIsIt(date)
        day = date.wday
        if day == 0
            day += 7
        end
        return day
    end
end
