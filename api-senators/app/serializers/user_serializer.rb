class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email
  has_many :senators, through: :ratings
  has_many :ratings
end
