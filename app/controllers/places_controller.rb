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
        all_popular_times=place.popular_times.all
        all_popular_times_array=[]
        all_popular_times.each{|each_popular_time| all_popular_times_array.push(each_popular_time.attributes)}
        hash=place.attributes
        hash["types"]=all_types_array
        hash["popular_times"]=all_popular_times_array
        hash
    end
end
