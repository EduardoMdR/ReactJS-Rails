Rails.application.routes.draw do
  devise_for :users, skip: :all
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace 'api' do
    namespace 'v1' do
      post 'sign_in', to: 'sessions#sign_in'
    end
  end
end
