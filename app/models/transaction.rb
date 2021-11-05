class Transaction < ApplicationRecord
  has_many :users
  has_many :chats
  belongs_to :pet
end
