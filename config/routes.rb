Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :panels
  resources :messages

  get 'customer_io_services/region', to: 'customer_io_services#region'
end
