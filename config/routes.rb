Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: JSON } do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :workspaces, only: [:index, :show, :create]
    resources :channels, only: [:index, :show, :create] do
      resources :messages, only: [:index]
    end
  end

  root to: "static_pages#root"
end
