Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do # /api/data

    get '/data', to: 'tests#index'

    get '/popular/day/:day/hour/:hour', to: 'popular#getnew'
    get '/popular/day/:day', to: 'popular#getday'
    get '/popular/:id/:day', to: 'popular#show'
    get '/popular/:id', to: 'popular#index'

    resources :dogs

  end

  resources :places, only: [:index, :show]
  resources :neighbourhoods, only: [:index]

  get '*path', to: "static_pages#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

end
