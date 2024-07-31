module Api
  class BookStatusesController < ApplicationController
    def index
      @book_statuses = BookStatus.all
      render json: @book_statuses
    end

    def show
      @book_status = BookStatus.find(params[:id])
      render json: @book_status
    end

    def create
      @book_status = BookStatus.new(book_status_params)
      if @book_status.save
        render json: @book_status, status: :created
      else
        render json: @book_status.errors, status: :unprocessable_entity
      end
    end

    def update
      @book_status = BookStatus.find(params[:id])
      if @book_status.update(book_status_params)
        render json: @book_status
      else
        render json: @book_status.errors, status: :unprocessable_entity
      end
    end

    def destroy
      @book_status = BookStatus.find(params[:id])
      @book_status.destroy
      head :no_content
    end

    private

    def book_status_params
      params.require(:book_status).permit(:status, :fave_books, :book_id, :user_id)
    end
  end
end