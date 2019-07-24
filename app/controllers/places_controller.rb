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
        hash=place.attributes
        hash["types"]=all_types_array
        hash
    end
end
