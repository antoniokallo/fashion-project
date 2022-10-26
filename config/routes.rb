Rails.application.routes.draw do
  resources :user_clothings
  resources :manufacturers
  resources :users
  resources :clothings
  resources :brands
  # resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  post '/login', to: 'users#login'
  post '/signup', to: 'users#create'
  post '/userclothings', to: 'user_clothings#create'
  get '/me', to: 'users#show'
end
