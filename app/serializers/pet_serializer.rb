class PetSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :love, :created_at, :natural_death, :creator_id, :owner_id, :living
end
