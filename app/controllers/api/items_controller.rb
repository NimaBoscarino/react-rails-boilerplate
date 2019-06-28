require 'plaid'

class Api::ItemsController < PlaidController

    def create
    client  = plaid_client
    public_token_response = client.item.public_token.exchange(item_params["public_token"])
    access_token = public_token_response.access_token
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
