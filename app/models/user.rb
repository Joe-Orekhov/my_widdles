class User < ApplicationRecord
  has_many :pets
  has_many :transactions

  has_secure_password

  validates :username, uniqueness: true
end
