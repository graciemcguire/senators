class Api::V1::UsersController < ApplicationController
  skip_before_action :authorized, only: [:create]

  def profile
    render json: { user: UserSerializer.new(current_user) }, status: :accepted
  end

  def create
    @user = User.create(user_params)
    if @user.valid?
      @token = encode_token({ user_id: @user.id })
      render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created
    else
      render json: { error: 'failed to create user' }, status: :not_acceptable
    end
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

 private
 def user_params
   params.require(:user).permit(:username, :email, :password)
 end

end
