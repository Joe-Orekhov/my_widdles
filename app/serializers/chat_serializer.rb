class ChatSerializer < ActiveModel::Serializer
  attributes :id, :message, :sender_username
end
