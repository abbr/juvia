source 'https://rubygems.org'

gem 'rails', '3.1.12'

# Bundle edge Rails instead:
# gem 'rails', :git => 'git://github.com/rails/rails.git'

gem 'schema_plus'
gem 'default_value_for'
gem 'bluecloth'
gem 'devise', '~> 1.5.0'
gem 'jquery-rails', '>= 1.0.12'
gem 'will_paginate', '~> 3.0.pre4'
gem 'css3buttons'
gem 'cancan', '~> 1.6.10'
gem 'inherited_resources'
gem 'rack', '~> 1.3.10' # fix Rack vulnerability
gem 'nokogiri'

# Deploy with Capistrano
# gem 'capistrano'

gem 'bcrypt-ruby'

group :test do
  # To use debugger
  gem 'debugger'
end

group :development do
  gem 'guard-livereload'

  # Gems used for comment import from WordPress
  # gem 'htmlentities'
  # gem 'sequel'
  # gem 'mysqlplus'
end

# Bundle gems for the local environment. Make sure to
# put test-only gems in this group so their generators
# and rake tasks are available in development mode:
group :development, :test do
  gem 'rspec-rails', '2.13.1'
  gem 'capybara', :require => false
  gem 'selenium-webdriver', :require => false
#  gem 'capybara-webkit', :require => false
  gem 'poltergeist', :require => false
  gem 'database_cleaner', :require => false
  gem 'factory_girl_rails', :require => false
  gem 'launchy', :require => false
  gem 'spork', '0.9.0.rc9', :require => false
end

# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'sass-rails',   '~> 3.1.5'
  gem 'coffee-rails', '~> 3.1.1'
  gem 'uglifier', '>= 1.0.3'
end

group :mysql do
  # adapter: mysql2
  gem 'mysql2', :require => false
end

group :postgres do
  # adapter: postgresql
  gem 'pg', :require => false
end

group :sqlite do
  # adapter: sqlite3
  gem 'sqlite3', :require => false
end
