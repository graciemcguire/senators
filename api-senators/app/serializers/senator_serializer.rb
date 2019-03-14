class SenatorSerializer < ActiveModel::Serializer
  attributes :id, :name, :state, :party, :naacp_rating, :pp_rating, :envi_rating, :nra_rating, :trump_rating
  has_many :ratings
end
