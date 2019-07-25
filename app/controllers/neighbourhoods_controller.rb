class NeighbourhoodsController < ApplicationController
    def index
        nbh=Neighbourhood.all
        array = []
        nbh.each{|element|
            if element.places.count!=0
                hash=formatData(element)
                array.push(hash)
            end
        }
        render :json=>{
            neighbourhoods: array
        }
    end

    def formatData(neighbourhood)
        all_border_points=neighbourhood.border_points.all
        all_border_points_array=[]
        all_border_points.each{|each_border_point| 
            point={}
            point["lat"]=each_border_point[:lat]
            point["lng"]=each_border_point[:long]
            all_border_points_array.push(point)
        }
        hash=neighbourhood.attributes
        hash["border_points"]=all_border_points_array
        hash
    end
end
