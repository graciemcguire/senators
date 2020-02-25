class Api::V1::RatingsController < ApplicationController

  def create
    @rating = Rating.find_by(senator_id: params[:senator_id])
    if @rating
      @rating.update(rating_params)
      render json: { rating: @rating }, status: :created
    else
      @new_rating = Rating.create(rating_params)
      render json: { rating: RatingSerializer.new(@new_rating) }, status: :created
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
