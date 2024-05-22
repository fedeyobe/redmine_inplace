
if Redmine::VERSION::MAJOR == 4
  require_relative './lib/editor_hooks.rb'
  require_relative './lib/timer/timer_hooks.rb'
elsif  Redmine::VERSION::MAJOR == 5
  require File.expand_path('./lib/editor_hooks.rb', __dir__)
  require File.expand_path('./lib/timer/timer_hooks.rb', __dir__)
end


Redmine::Plugin.register :inplace_issue_editor do
  name 'Inplace Issue Editor plugin'
  author 'Author name'
  description 'The Redmineflux Inline Editor Plugin is a powerful extension. This plugin enhances the user experience by providing an inline editing feature for various fields within Redmine, allowing users to edit and update information directly on the page without the need for page reloads or additional forms.'
  version '1.2.0'
  url 'https://www.redmineflux.com/knowledge-base/plugins/inline-editor-plugin/'
  author_url 'https://www.redmineflux.com/knowledge-base/plugins/inline-editor-plugin/'

  permission :edit_project, { :projects => :edit }

  #define roles
  project_module :inplace_issue_editor do
    permission :edit_project, {}
  end
end
