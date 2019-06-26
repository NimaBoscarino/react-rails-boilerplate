Rails.application.routes.draw do
  # devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do # /api/data

    get '/users', to: 'users#index'
    get '/charities', to:'charities#show'

    resources :charities, only: [:show]

    resources :users do
      resource :dashboard
    end
    resource :session, only: [:create, :destroy, :show]

  end


  get '*path', to: "static_pages#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

end
