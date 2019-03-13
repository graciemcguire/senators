class Api::V1::SenatorsController < ApplicationController
  def index
    @senators = Senator.all
    render json: @senators
  end
end
