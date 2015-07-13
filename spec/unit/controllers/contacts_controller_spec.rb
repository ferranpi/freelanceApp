require 'rails_helper'

RSpec.describe ContactsController, type: :controller do
  render_views
  describe "GET #index" do
    before do
      xhr :get, :index, format: :json
    end

    subject(:results) { JSON.parse(response.body) }

    it "returns success" do
      expect(response).to have_http_status(:success)
    end

    it "renders the index view" do
      expect(response).to render_template("contacts/index")
    end
  end

end
