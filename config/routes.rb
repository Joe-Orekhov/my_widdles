Rails.application.routes.draw do
  resources :chats
  resources :transactions
  resources :pets
  resources :users

    get "/me", to: "users#show"
    post '/login', to: 'sessions#create'
    post '/signup', to: 'users#create'
    delete '/logout', to: 'sessions#destroy'
  end

