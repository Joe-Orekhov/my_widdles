class ChatSerializer < ActiveModel::Serializer
  attributes :id, :receiver_id, :sender_id, :message, :seller_name, :buyer_name
end
