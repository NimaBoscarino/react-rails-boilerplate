Rails.application.routes.draw do
  # devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do # /api/data

    get '/session', to: 'sessions#show'
    post '/session', to: 'sessions#create'
    delete '/session', to: 'sessions#destroy'
    get '/users', to: 'users#index'
    get '/charities', to:'charities#show'
    get '/goals', to:'goals#show'

    resources :charities, only: [:show]
    resources :goals, only: [:show]

    resources :users
    resources :session, only: [:create, :destroy, :show]

  end


  get '*path', to: "static_pages#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

end
