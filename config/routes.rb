Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  

  namespace :api do # /api/data

    get '/activities/user/:user_id', to: 'activities#user_booked_activities'
    get '/activities/user/:user_id', to: 'activities#user_favored_activities'
    # get '/data', to: 'tests#index'
    resources :activities 

    resources :users do
      resources :bookings
      resources :favorites
    end

  end

  get '*path', to: "static_pages#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

  
end
