class Api::CharitiesController < ApplicationController
  def show
    @charities = Charity.all
    @tests = Charity.joins(:goals).select('charities.id, charities.name, charities.desc, goals.objective, charities.image')
    render :json => {
      charities: @charities,
      tests: @tests
    }
  end
end