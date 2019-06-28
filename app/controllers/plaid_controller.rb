require 'plaid'
class PlaidController < ApplicationController

  def plaid_client
   @client ||= Plaid::Client.new(env: :sandbox,
                           client_id: "5d13baabdeb8a80013cc9b2c",
                           secret: "782c198e8853ce4a2318f5d8448737",
                           public_key: "a165568792fe5fd82ba0f4ecbef6da")
  end

end
