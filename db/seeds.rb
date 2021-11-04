# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts ("DELETING OLD SEEDS")
User.delete_all
Pet.delete_all
Transaction.delete_all
Chat.delete_all

puts "UPDATING USERS..."

user1 = User.create(username: 'POOP', password: 'POOP', money: 1000, password_digest: 'k')
user2 = User.create(username: 'POP', password: 'POP', money: 1000, password_digest: 'k')

puts "USERS cREATED!"

puts "UPDATING PETS..."

pet1 = Pet.create(name: 'pet1', image: 'img', love: 10, creator_id: user1.id, owner_id: user2.id, living: true)
pet2 = Pet.create(name: 'pet2', image: 'img', love: 10, creator_id: user2.id, owner_id: user1.id, living: true)
pet3 = Pet.create(name: 'pet3', image: 'img', love: 10, creator_id: user2.id, owner_id: user1.id, living: true)

puts "PETS cREATED!"

puts "UPDATING TRANSACTION..."
tran1 = Transaction.create(pet_id: pet3.id, buyer_id: user1.id, seller_id: user2.id, price: 200)
puts "TRANSACTION cREATED!"

puts "UPDATING CHATS..."

Chat.create(transaction_id: tran1.id ,receiver_id: user2.id, sender_id: user1.id, message: 'HELLO')

puts "CHATS cREATED!"