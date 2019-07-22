class PlacesController < ApplicationController
    def index
        render :json=>{
            places: Place.first
        }
    end
end
