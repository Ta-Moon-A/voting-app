require 'sinatra'
require 'rest-client'
require 'json'

CLIENT_ID = ENV['d0e3f88b72ae3bb57b0c']
CLIENT_SECRET = ENV['32247fc72fec67a9c54ebda5e912c1f465f91239']

get '/' do
  erb :index, :locals => {:client_id => CLIENT_ID}
end