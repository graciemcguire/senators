class Api::V1::RatingsController < ApplicationController
  def create
    @rating = Rating.create(rating_params)
    if @rating.valid?
      render json: { rating: RatingSerializer.new(@rating) }, status: :created
    else
      render json: { error: 'woopsie' }, status: :not_acceptable
    end
  end

  def update
    @rating = Rating.find(params[:id])
    @rating.update(rating_params)
    render json: @rating
  end

  private
  def rating_params
    params.require(:rating).permit(:user_id, :senator_id, :user_rating)
  end
end
