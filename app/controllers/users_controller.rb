class UsersController < ApplicationController
    before_action :set_user, only: %i[ show update destroy ]

    # GET /users
    def index
      @users = User.all
  
      render json: @users
    end
  
    # GET /users/1
    def show
      render json: @user
    end
  
    # LOGIN
    def login
      user = User.find_by(username: params[:username], name: params[:name]).try(:authenticate, params[:password])
  
      if user 
        token = encode(user.id)
        
        render json: {user: user, token: token}
      else
        render json: { message: 'wrong'}
      end
      # render json: user
    end
  
    # get profile
    def me
      token = request.headers['token']
      user_id =   decode(token)
      user = User.find(user_id)
      render json: user
    end
  
    # POST /users
    def signup
      user = User.create!(username: params[:username],  password: params[:password], name: params[:name])
      render json: user
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
      def set_user
        @user = User.find(params[:id])
      end
  
      # Only allow a list of trusted parameters through.
      def user_params
        params.require(:user).permit(:username, :password_digest)
      end
end
