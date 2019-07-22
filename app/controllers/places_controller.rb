class PlacesController < ApplicationController
    def index
        render :json=>{
            places: Place.all
        }
    end
end
