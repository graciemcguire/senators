class RatingSerializer < ActiveModel::Serializer
  attributes :id, :user_rating
  belongs_to :user
  belongs_to :senator
end
