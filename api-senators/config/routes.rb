Rails.application.routes.draw do
  namespace 'api' do
    namespace 'v1' do
      resources :senators, :ratings, :users, :auth
      post '/login', to: 'auth#create'
      get '/profile', to: 'users#profile'
      get '/current_user', to: 'auth#show'
      get '/user_rating', to: 'users#user_senators'
    end
  end
end
