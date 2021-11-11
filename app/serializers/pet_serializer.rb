class PetSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :love, :created_at, :creator_id, :owner_id, :living, :price
end
