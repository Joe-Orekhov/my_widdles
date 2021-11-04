class Transaction < ApplicationRecord
  belongs_to :user
  has_many :chats
end
