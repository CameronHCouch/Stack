Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: JSON } do
    resources :users, only: [:create, :show, :index]
    resource :session, only: [:create, :destroy]
    
    resources :workspaces, only: [:index, :show, :create, :destroy]
    resources :channels, only: [:index, :show, :create, :update, :destroy] do
      resources :messages, only: [:index]
    end
  end

  root to: 'static_pages#root'
  mount ActionCable.server, at: '/cable'
end
