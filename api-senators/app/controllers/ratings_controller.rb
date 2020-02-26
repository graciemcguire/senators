class RatingsController < ApplicationController

  def create
    rating = Rating.find_by(senator_id: params[:senator_id])
    u = {user_id: current_user.id}
    payload = rating_params.merge(u)
    if rating
      rating.update(payload)
      render json: { rating: rating }, status: :created
    else
      new_rating = Rating.create(payload)
      render json: { rating: RatingSerializer.new(new_rating) }, status: :created
    end
  end

  def update
    rating = Rating.find(params[:id])
    rating.update(rating_params)
    render json: rating
  end

  private
  def rating_params
    params.permit(:senator_id, :user_rating)
  end

end
