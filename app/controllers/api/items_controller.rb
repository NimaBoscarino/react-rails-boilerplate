require 'plaid'

class Api::ItemsController < ApplicationController



    def create
    client = Plaid::Client.new(env: :sandbox,
                           client_id: "5d13baabdeb8a80013cc9b2c",
                           secret: "782c198e8853ce4a2318f5d8448737",
                           public_key: "a165568792fe5fd82ba0f4ecbef6da")
    response = client.item.public_token.exchange(item_params["public_token"])
    access_token = response.access_token
    @item = Item.new(item_params)
    @item.access_token = access_token

    # @item.access_token = access_token
    if @item.save
      render :json => {
        message: "CREATED!",
        item: @item
      }
    else
      render :json => {message: "account not saved!"}
    end
  end

  private

  def item_params
    params.require(:item).permit(:public_token, :institution_name, :institution_id, :user_id)
  end
end
