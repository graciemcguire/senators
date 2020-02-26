class SenatorsController < ApplicationController

  def index
    senators = Senator.all
    render json: senators
  end

  def show
    senator = Senator.find(params[:id])
    render json: senator
  end
  
end
