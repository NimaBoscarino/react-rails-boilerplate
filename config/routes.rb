Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do # /api/data

    
    #get '/exercises', to: 'exercises#index'
    

    resources :muscles, only: :index
    resources :exercises, only: [:index, :show]
    resources :workouts, except: [:new, :edit] do 
      member do
        post :add_exercise
        delete :remove_exercise
        get :exercises
      end
    end

    #Gets login page
    get '/login', to: 'sessions#new'
    #Send login info to create session
    post '/login' => 'sessions#create'
    #End session
    get '/logout' => 'sessions#destroy'
  
    get '/users', to: 'users#index'
    get '/signup' => 'users#new'
    post '/users' => 'users#create'
  end


  get '*path', to: "static_pages#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

end
