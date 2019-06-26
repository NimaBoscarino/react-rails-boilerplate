class Api::CharitiesController < ApplicationController
  def show
    @charities = Charity.all
    render :json => {
      charities: @charities
    }
  end
end