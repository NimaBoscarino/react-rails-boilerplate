class Api::BookingsController < ApplicationController
  def index
    bookings = Booking.all
    render json: bookings
    # bookings = Booking.all.includes(:activities)
    # render json: bookings, include: ['acritities']
  end

  def show
    booking = Booking.find_by(user_id: 1)
    render json: booking
    # render json: BookingSerializer.new(booking, @options).serial
    # render json: booking, include: ["activity", 'user']
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
