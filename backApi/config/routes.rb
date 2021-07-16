Rails.application.routes.draw do
  devise_for :users, skip: :all
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace 'api' do
    namespace 'v1' do
      post 'sign_in', to: 'sessions#sign_in'

      scope 'users' do
        get '/', to: 'users#index', as: :user_index
        get '/:id', to: 'users#show', as: :user_show
        post '/create', to: 'users#create', as: :user_create
        put '/:id', to: 'users#update', as: :user_update
        delete '/:id', to: 'users#destroy', as: :user_destroy
      end
    
      scope 'genres' do
        get '/', to: 'genres#index', as: :genre_index
        get '/:id', to: 'genres#show', as: :genre_show
        put '/:id', to: 'genres#update', as: :genre_update
      end

      scope 'games' do
        get '/', to: 'games#index', as: :game_index
        get '/:id', to: 'games#show', as: :game_show
        get '/genre/:id', to: 'games#show_genre', as: :game_show_genre
        post '/create', to: 'games#create', as: :game_create
        put '/:id', to: 'games#update', as: :game_update
        delete '/:id', to: 'games#destroy', as: :game_destroy
        post '/wishlist/:id', to: 'games#wishlist', as: :wishlist_create
        delete 'wishlist/:id/:user', to: 'games#destroy_wishlist', as: :wishlist_destroy
      end

      scope 'game_genres' do
        post '/:id', to: 'game_genres#create', as: :game_genres_create
        delete '/:id', to: 'game_genres#destroy', as: :game_genres_destroy
      end

      scope 'wishlists' do
        get '/:id', to: 'wishlists#show', as: :wishlist_show
      end
    end
  end
end
