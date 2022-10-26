class UsersController < ApplicationController
  before_action :authorized, only: [:show, :update]
  def index
    users = User.all
    render json: users
  end
  def show
    render json: @current_user
  end
  def login #for /login
    #find by username from body
    @user = User.find_by(username: params[:username])
    #check if user exists and password matches password digest
    if (@user && @user.authenticate(params[:password]))
        #create token for front end
        token = JWT.encode({user_id: @user.id}, 'jwt')
        #pass user instance and token to front end
        render json: {user: @user, token: token}
    end
  end
  def create #for /signup
    @user = User.create!(username: params[:username], name: params[:name], password: params[:password])
    token = JWT.encode({user_id: @user.id}, 'jwt')
    render json: {user: @user, token: token}
  end
  
    # PATCH/PUT /users/1
    def update
      if @user.update(user_params)
        render json: @user
      else
        render json: @user.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /users/1
    def destroy
      @user.destroy
    end
  
    private
      # Use callbacks to share common setup or constraints between actions.
  
      # Only allow a list of trusted parameters through.
      def user_params
        params.require(:user).permit(:username, :password_digest)
      end
end
