class Api::BookingsController < ApplicationController
  def index
    # bookings = Booking.all
    bookings = Booking.where(user_id: 1)
    render json: bookings
  end

  def show
    booking = Booking.where(user_id: 1)
    render json: booking
  end

  def destroy
    booking = Booking.where(params[:id])
    booking.delete
  end
  # def create
  #   activity = Activity.finde_by(id: params[:activity_id])

  #   booking = Booking.new(
  #     number_of_participants: params[:number_of_participants]
  #     price_per_person: activity.price_per_person 
  #   )
  # end
  
end
