require 'sinatra'
require 'rest-client'
require 'json'

CLIENT_ID = ENV['d0e3f88b72ae3bb57b0c']
CLIENT_SECRET = ENV['32247fc72fec67a9c54ebda5e912c1f465f91239']

get '/' do
  erb :index, :locals => {:client_id => CLIENT_ID}
end



get '/callback' do
  # get temporary GitHub code...
  session_code = request.env['rack.request.query_hash']['code']

  # ... and POST it back to GitHub
  result = RestClient.post('https://github.com/login/oauth/access_token',
                          {:client_id => CLIENT_ID,
                           :client_secret => CLIENT_SECRET,
                           :code => session_code},
                           :accept => :json)

  # extract the token and granted scopes
  access_token = JSON.parse(result)['access_token']

  # check if we were granted user:email scope
  scopes = JSON.parse(result)['scope'].split(',')
  has_user_email_scope = scopes.include? 'user:email'
end