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
    byebug
    if !!User.find_by(id: params[:owner_id])
      pets_shop = Pet.where.not(creator_id: 22)
    else 
      render json: { error: "Owner not found"}, status: :not_found
    end
  end

  def create

    new_pet = Pet.create(name: params[:name], image: params[:image], love: 10, creator_id: current_user.id, owner_id: 0, living: true, price: params[:price])
    if new_pet.valid?
      render json: new_pet, status: :ok
    else 
      render json: {error: new_pet.error.full_messages}
    end
  end

  def update
    updated_pet = Pet.update(name: params[:name], image: params[:image], love: 10, creator_id: current_user.id, owner_id: 0, living: true, price: params[:price])
    if !!updated_pet
      render json: updated_pet, status: :ok
    else 
      render json: {error: updated_pet.error.full_messages}
    end
  end

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
