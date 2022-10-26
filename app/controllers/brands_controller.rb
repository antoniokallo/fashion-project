class BrandsController < ApplicationController
  before_action :authorized, only: [:index]

    def index
        brands = Brand.all
    
        render json: brands
      end
    
end
