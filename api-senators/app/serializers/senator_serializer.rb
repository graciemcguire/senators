class SenatorSerializer < ActiveModel::Serializer
  attributes :id, :name, :state, :party, :contact, :image
end
