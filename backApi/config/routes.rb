Rails.application.routes.draw do
  devise_for :users, skip: :all
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace 'api' do
    namespace 'v1' do
      post 'sign_in', to: 'sessions#sign_in'
    
      scope 'games' do
        get '/', to: 'games#index', as: :game_index
        get '/:id', to: 'games#show', as: :game_show
        post '/create', to: 'games#create', as: :game_create
        put '/:id', to: 'games#update', as: :game_update
        delete '/:id', to: 'games#destroy', as: :game_destroy
      end
    end
  end
end
