class Api::CharitiesController < ApplicationController
  def show
    @charities = Charity.all
    @test = Charity.joins(:goals).select('charities.name, goals.objective')
    render :json => {
      charities: @charities,
      test: @test
    }
  end

end