class ClothingsController < ApplicationController
  before_action :authorized, only: [:create, :index, :show]

    def index
        clothings = Clothing.all
    
        render json: clothings
      end
    

def show

end 

def create
token = request.headers('token')
user = decode_token(token)
  if user
your_clothing = Clothing.create!(clothing_id: params[:clothing_id], user_id: user)
render json: your_clothings
  else 
render json: {error: "no"}, status: :not_found

  end
end 

end
