Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  namespace :api do # /api/data
    
    get '/data', to: 'tests#index'
    
    resources :clients
    resources :artists
    resources :categories
    resources :comments
    resources :reviews
    resources :requests
    resources :messages
    
  end
  
  get '*path', to: "static_pages#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

  # post '/login_artist' => 'sessions#create_artist'
  post '/login_client' => 'sessions#create_client'
  post '/logout' => 'sessions#destroy'
  
end
