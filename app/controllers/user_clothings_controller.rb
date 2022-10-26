class UserClothingsController < ApplicationController
before_action :authorized, only: [:create]
def create
    token = request.headers["token"]
    user_id = decode(token)
    clothing_choice = Clothing.find(params[:clothing_id])
    
    if user_id
    userclothings = UserClothing.create!(user_id: user_id, clothing_id: clothing_choice.id)
    render json: userclothings
    end
end
private
def  user_clothings_params
  params.permit(:user_id, :clothing_id)
end
end
