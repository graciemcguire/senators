class RatingSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :user
  belongs_to :senator
end
