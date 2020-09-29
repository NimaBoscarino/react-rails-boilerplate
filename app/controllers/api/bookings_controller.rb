class Api::BookingsController < ApplicationController
  def index
    bookings = Booking.all
    render json: bookings
  end

  def show
    bookings = Booking.all
    render json: bookings
    # booking = Booking.find(params[:user_id])
  end

  # def create
  #   activity = Activity.finde_by(id: params[:activity_id])

  #   booking = Booking.new(
  #     number_of_participants: params[:number_of_participants]
  #     price_per_person: activity.price_per_person 

  #   )
  # end
  
  # def destroy
  #   booking = Booking.find(params[:id])
  #   booking.delete
  # end


end
