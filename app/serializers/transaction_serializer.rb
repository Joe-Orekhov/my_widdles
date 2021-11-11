class TransactionSerializer < ActiveModel::Serializer
  attributes :id, :pet_id, :buyer_id, :seller_id, :price, :other_username, :pet_name
end
