Rails.application.routes.draw do
  
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  # devise_for :admin_users, ActiveAdmin::Devise.config
  # ActiveAdmin.routes(self)
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  get '/api/events/upcoming', to: 'events#upcoming'
  get '/api/events/past', to: 'events#past'
  
  scope '/api' do 
    resources :neighborhoods, only: [:index]
    resources :events
  end 


  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end


end
