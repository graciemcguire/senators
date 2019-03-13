class Api::V1::RatingsController < ApplicationController
  def index
    render json: Rating.find(params[:id])
end
