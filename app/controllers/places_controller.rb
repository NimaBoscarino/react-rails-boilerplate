class PlacesController < ApplicationController
    def index
        places=Place.all
        array = []
        places.each{|element|
            hash=formatData(element)
            array.push(hash)
        }
        render :json=>{
            places: array
        }
    end

    def show
        place=Place.find(params[:id])
        hash=formatData(place)
        render :json=>{
            place: hash
        }
    end

    def formatData(place)
        all_types=place.types.select(:name)
        all_types_array=[]
        all_types.each {|each_type| all_types_array.push(each_type[:name])}

        time_now = Time.now
        day = whatDayIsIt(time_now)
        hour = whatHourIsIt(time_now)

        # all_popular_times=place.popular_times.where(day_id: day).where(hour_id: hour)
        # all_popular_times_array=[]
        # all_popular_times.each{|each_popular_time| all_popular_times_array.push(each_popular_time.attributes)}

        current_busy_value=place.popular_times.select(:busy_value).where(day_id: day).where(hour_id: hour).first

        all_yelp_photos=place.yelp_photos.select(:url)
        all_yelp_photos_array=[]
        all_yelp_photos.each{|each_photo| all_yelp_photos_array.push(each_photo[:url])}

        all_yelp_categories=place.yelp_categories.select(:category)
        all_yelp_categories_array=[]
        all_yelp_categories.each{|each_category| all_yelp_categories_array.push(each_category[:category])}

        hash=place.attributes
        hash["types"]=all_types_array
        # hash["popular_times"]=all_popular_times_array
        hash["neighbourhood_name"]=place.neighbourhood.attributes["name"]
        hash["current_busy_value"]=current_busy_value
        hash["yelp_photos"]=all_yelp_photos_array
        hash["yelp_categories"]=all_yelp_categories_array
        hash
    end

    def whatDayIsIt(date)
        day = date.wday
        if day == 0
            day += 7
        end
        return day
    end

    def whatHourIsIt(date)
        hour = date.hour
        minute = date.min
        if minute < 30
            hour += 1
        else
            hour += 2
        end
        if hour == 25
            hour = 1
        end
        return hour
    end
end
