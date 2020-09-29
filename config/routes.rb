Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  namespace :api do # /api/data

    # get '/data', to: 'tests#index'
    resources :users
    resources :activities
    resources :bookings, only: [:show, :create, :destroy]
    resources :favorites, only: [:show, :create, :destroy]
    
    # resources :dogs

  end

  get '*path', to: "static_pages#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

  
end
