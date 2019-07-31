class Api::PopularController < ApplicationController
    def index
        day = whatDayIsIt(Time.now)
        hot_scores = Place.find(params[:id]).popular_times.where(day_id:day)
        render :json=>{
            hot_scores: hot_scores
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
        hot_scores = PopularTime.where({day_id: params[:day],hour_id: params[:hour]})
        render :json => {
            hot_scores: hot_scores
        }
    end
    def getday
        places= Place.select(:id, :lat, :long)
        arr=[]
        places.each{|place|
            hot_scores = place.popular_times.select(:busy_value, :hour_id).where(day_id:params[:day]).where("hour_id >= 17 OR hour_id <= 3")
            hot_scores_arr=[]
            hash=place.attributes
            hot_scores.each{|element| hot_scores_arr.push(element.attributes)}
            hash["hot_scores"]=hot_scores_arr
            arr.push(hash)
        }
        render :json =>{
            hot_scores: arr
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
