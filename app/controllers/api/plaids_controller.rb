class Api::PlaidsController < ApplicationController
  def create
    @item = Item.new(item_params)
    if @item.save
      render :json => {
        message: "CREATED!"
      }
    else
      render :json => {message: "account not saved!"}
    end
  end
end
