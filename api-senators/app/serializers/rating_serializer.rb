class RatingSerializer < ActiveModel::Serializer
  attributes :id, :user_rating, :user_id, :senator_id
end
