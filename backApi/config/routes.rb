Rails.application.routes.draw do
  devise_for :users, skip: :all
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace 'api' do
    namespace 'v1' do
      post 'sign_in', to: 'sessions#sign_in'
    
      scope 'genres' do
        get '/', to: 'genres#index', as: :genre_index
        get '/:id', to: 'genres#show', as: :genre_show
        put '/:id', to: 'genres#update', as: :genre_update
      end

      scope 'games' do
        get '/', to: 'games#index', as: :game_index
        get '/:id', to: 'games#show', as: :game_show
        post '/create', to: 'games#create', as: :game_create
        put '/:id', to: 'games#update', as: :game_update
        delete '/:id', to: 'games#destroy', as: :game_destroy
        post '/wishlist/:id', to: 'games#wishlist', as: :game_wishlist
      end

      scope 'wishlists' do
        get '/:id', to: 'wishlists#show', as: :wishlist_show
      end
    end
  end
end
