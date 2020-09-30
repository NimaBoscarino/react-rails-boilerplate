Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  # get '/api/users/:user_id/bookings'

  namespace :api do # /api/data

    get '/activities/user/:user_id', to: 'activities#user_activities'
    # get '/data', to: 'tests#index'
    resources :activities 


    resources :users do
      resources :bookings#, controller: 'api/bookings'#, only: [:show, :create, :destroy]
      resources :favorites#, only: [:show, :create, :destroy]
    end

  end

  get '*path', to: "static_pages#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

  
end
