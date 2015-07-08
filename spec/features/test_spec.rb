require "spec_helper.rb"

describe "Testing tests", js: true do
  it "shows my name" do
    visit "/"
    fill_in "input_0", with: "ferran"
    expect(page).to have_content("Hello, ferran")
  end
end
