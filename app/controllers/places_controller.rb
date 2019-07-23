class PlacesController < ApplicationController
    def index
        render :json=>{
            places: Place.all
        }
    end

    def show
        render :json=>{
            place: Place.find(params[:id])
        }
    end
end
