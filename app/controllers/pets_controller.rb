class PetsController < ApplicationController

  def users_pets
    if !!User.find_by(id: params[:owner_id])
      owners_pets = Pet.where(owner_id: params[:owner_id])
      
        if !!owners_pets
          render json: owners_pets, status: :ok
        else 
          render json: { error: "Owner has no pets"}, status: :not_found
        end
    else
      render json: { error: "Owner not found"}, status: :not_found
    end

  end

  def pets_shop
    if !!User.find_by(id: params[:owner_id])
      not_created_pets = Pet.where.not(creator_id: current_user.id)
      pets_shop = not_created_pets.where(owner_id: 0)
      render json: pets_shop, status: :ok
    else 
      render json: { error: "Owner not found"}, status: :not_found
    end
  end

  def create
    boxOBJ = {
      "1A": 0, "1B": 0, "1C": 0, "1D": 0, "1E": 0, "1F": 0, "1G": 0, "1H": 0, "1I": 0, "1J": 0,
      "2A": 0, "2B": 0, "2C": 0, "2D": 0, "2E": 0, "2F": 0, "2G": 0, "2H": 0, "2I": 0, "2J": 0,
      "3A": 0, "3B": 0, "3C": 0, "3D": 0, "3E": 0, "3F": 0, "3G": 0, "3H": 0, "3I": 0, "3J": 0,
      "4A": 0, "4B": 0, "4C": 0, "4D": 0, "4E": 0, "4F": 0, "4G": 0, "4H": 0, "4I": 0, "4J": 0,
      "5A": 0, "5B": 0, "5C": 0, "5D": 0, "5E": 0, "5F": 0, "5G": 0, "5H": 0, "5I": 0, "5J": 0,
      "6A": 0, "6B": 0, "6C": 0, "6D": 0, "6E": 0, "6F": 0, "6G": 0, "6H": 0, "6I": 0, "6J": 0,
      "7A": 0, "7B": 0, "7C": 0, "7D": 0, "7E": 0, "7F": 0, "7G": 0, "7H": 0, "7I": 0, "7J": 0,
      "8A": 0, "8B": 0, "8C": 0, "8D": 0, "8E": 0, "8F": 0, "8G": 0, "8H": 0, "8I": 0, "8J": 0,
      "9A": 0, "9B": 0, "9C": 0, "9D": 0, "9E": 0, "9F": 0, "9G": 0, "9H": 0, "9I": 0, "9J": 0,
      "10A": 0, "10B": 0, "10C": 0, "10D": 0, "10E": 0, "10F": 0, "10G": 0, "10H": 0, "10I": 0, "10J": 0
    };
    split_array = params[:image].split(",")
      split_array.each do |pix| 
        # boxOBJ[:pix] = 1
        boxOBJ[:"#{pix}"] = 1
      end
      pixArray = boxOBJ.values.join()
    new_pet = Pet.create(name: params[:name], image: pixArray, love: 10, creator_id: current_user.id, owner_id: 0, living: true, price: params[:price])
    if new_pet.valid?
      render json: new_pet, status: :ok
    else 
      render json: {error: new_pet.error.full_messages}
    end
  end

  # def update_price
  #   updated_pet = Pet.update(name: params[:name], image: params[:image], love: 10, creator_id: current_user.id, owner_id: 0, living: true, price: params[:price])
  #   if !!updated_pet
  #     render json: updated_pet, status: :ok
  #   else 
  #     render json: {error: updated_pet.error.full_messages}
  #   end
  # end

   # def sell_pet
  #   updated_pet = Pet.update(name: params[:name], image: params[:image], love: 10, creator_id: current_user.id, owner_id: 0, living: true, price: params[:price])
  #   if !!updated_pet
  #     render json: updated_pet, status: :ok
  #   else 
  #     render json: {error: updated_pet.error.full_messages}
  #   end
  # end

  def pets_purchased
    byebug
    pet_purchased = Pet.update(owner_id: current_user.id)
    if !!pet_purchased
      render json: pet_purchased, status: :ok
    else 
      render json: {error: pet_purchased.error.full_messages}
    end
  end

  private 

  def pets_params_create
    params.permit(:name, :image, :love, :creator_id, :owner_id, :living, :price)
  end
end
