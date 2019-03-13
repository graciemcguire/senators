class Api::V1::UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end

  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def update
    @user = User.find(params[:id])
    @senator = Senator.find(params[:senator_id])
    @user.senators << @senator
    render json: @user.senators
  end

  def destroy
    @user = User.find(params[:id])
    @senator = Senator.find(params[:senator_id])
    @user.senators.delete(@senator)
    render json: @user.plants
  end
end
