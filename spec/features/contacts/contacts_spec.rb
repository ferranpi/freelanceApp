require 'rails_helper.rb'

feature 'Contacts' do
  scenario 'List contacts' do
    given_a_user
    when_they_visits_the_contacts_page
    then_they_should_see_their_contacts_list
  end

  def given_a_user
    User.
  end
end
