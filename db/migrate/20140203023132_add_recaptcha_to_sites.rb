class AddRecaptchaToSites < ActiveRecord::Migration
  def change
    add_column :sites, :use_recaptcha, :boolean, default: false
    add_column :sites, :recaptcha_public_key, :string
    add_column :sites, :recaptcha_private_key, :string
  end
end
