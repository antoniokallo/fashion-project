Rails.application.routes.draw do
  resources :clothings
  resources :closets
  resources :brands
  resources :sus_clothings
  # resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  post '/login', to: 'users#login'
  post '/signup', to: 'users#signup'
  get '/me', to: 'users#me'
end
