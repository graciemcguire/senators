class UsersController < ApplicationController
  skip_before_action :authorized, only: [:create, :index]

  def index
    users = User.all
    render json: users
  end

  def profile
    render json: { user: UserSerializer.new(current_user)}, status: :accepted
  end

  def user_senators
    user = User.find(current_user.id)
    # user_wokes = user.ratings.map{ |r| r.user_rating === 'woke' }
    # user_jokes = user.ratings.map{ |r| r.user_rating === 'joke' }
    senators = user.senators.map{|r| SenatorSerializer.new(r)}
    render json: { senators: senators  }, status: :accepted
    # wokes = user_wokes.map{ |s| Sena}
  end

  def create
    user = User.create(user_params)
    if user.valid?
      token = encode_token({ user_id: user.id })
      render json: { user: UserSerializer.new(user), jwt: token }, status: :created
    else
      render json: { error: 'failed to create user' }, status: :not_acceptable
    end
  end

  # def update
  #   user = User.find(params[:id])
  #   senator = Senator.find(params[:senator_id])
  #   user.senators << senator
  #   render json: user.senators
  # end

  def destroy
    user = User.find(params[:id])
    senator = Senator.find(params[:senator_id])
    user.senators.delete(senator)
    render json: user.senators
  end

 private
 def user_params
   params.permit(:username, :email, :password)
 end

end
