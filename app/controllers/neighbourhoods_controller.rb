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
        yaletown =
        all_border_points=neighbourhood.border_points.all
        all_border_points_array=[]
        all_border_points.each{|each_border_point|
            point={}
            point["lat"]=each_border_point[:lat]
            point["lng"]=each_border_point[:long]
            all_border_points_array.push(point)
        }
        # Create ring shape for Downtown Polygon
        if neighbourhood.name == "Downtown"
            yaletown = Neighbourhood.where(name: 'Yaletown')[0]
            all_border_points2 = yaletown.border_points.all
            all_border_points_array2 = []
            all_border_points2.each{|more_border_point|
                point={}
                point["lat"]=more_border_point[:lat]
                point["lng"]=more_border_point[:long]
                all_border_points_array2.push(point)
            }
            all_border_points_array3 = []
            all_border_points_array3.push(all_border_points_array)
            all_border_points_array3.push(all_border_points_array2.reverse)
            all_border_points_array = all_border_points_array3
        end
        hash=neighbourhood.attributes
        hash["border_points"]=all_border_points_array
        hash
    end
end
