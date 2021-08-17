class Api::MessagesController < ApplicationController

  def index
    @messages = Message.all
      render json: @messages
  end
 
end
