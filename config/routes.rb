# Plugin's routes
# See: http://guides.rubyonrails.org/routing.html

get '/projects/:id/active_memberss' , to: 'issue_tables#fetch_active_members'

get '/issues/:id/allowed_status', to: 'issue_tables#fetch_issue_allowed_status'

# put '/projects/:id', to: 'issue_tables#create'
