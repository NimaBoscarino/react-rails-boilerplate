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
    
  end
  
  get '*path', to: "static_pages#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

end
