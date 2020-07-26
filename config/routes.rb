Rails.application.routes.draw do
  root 'posts#index'
  resources :posts, only: :create

  get 'posts/:id', to: 'posts#checked'
  # use Path Parameter as End Point

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
