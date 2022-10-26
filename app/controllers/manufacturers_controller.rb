class ManufacturersController < ApplicationController
    before_action :authorized, only: [:index]


end
