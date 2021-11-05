Rails.application.routes.draw do
  resources :chats
  resources :transactions
  resources :pets
  resources :users

    # User
    get "/me", to: "users#show"
    post '/signup', to: 'users#create'
    post '/login', to: 'sessions#create'
    delete '/logout', to: 'sessions#destroy'
    
    # PETS
    get '/users_pets/:owner_id', to: 'pets#users_pets'
    get '/pets_shop/:owner_id', to: 'pets#pets_shop'
    post '/create_pet', to: 'pets#create'
    # patch '/update_pet/:id', to: 'pets#update'
    get '/pet_purchased', to: 'pets#pets_purchased'
    delete '/delete_pet', to: 'pets#destroy'

    
    
  end

