require 'spec_helper'

describe Site do
  before { @site = FactoryGirl.create(:site1, user: kotori) }
  subject { @site }
  it { should respond_to(:use_recaptcha) }
  it { should respond_to(:recaptcha_key) }
end