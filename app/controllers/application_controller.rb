class ApplicationController < ActionController::API
    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity
    before_action :authorized #calls and checks if authorized method passes

    #asks the question is user logged in
    def logged_in_user
        headers = request.headers['token']
        puts 'headers', headers
        if(headers)
            token = headers
            puts 'token', token
            cur_id = JWT.decode(token, 'jwt', true, algorithm: 'HS256')
            puts "cur_id'", cur_id
            @current_user = User.find(cur_id[0]["user_id"])
            @current_user
        end 
    end 

    #throws error if not logged in
    def authorized 
        puts "checking... #{logged_in_user}"
        # !! converts a value to boolean
        render json: { message: 'Please log in' }, status: :unauthorized unless !!logged_in_user
    end 

    def secret
        'jwt'
    end

    # def encode(user_id)
    #     payload = {
    #         user_id: user_id
    #     }
    #     JWT.encode payload, secret, 'HS256'
    # end

    def decode(token)
        JWT.decode(token, secret)[0]['user_id']
    end

    private 
    def render_unprocessable_entity(invalid)
        render json: {errors: invalid.record.errors}, status: :unprocessable_entity
    end
    def render_not_found(error)
        render json: {errors: {error.model => "Not Found"}}, status: :not_found
    end
end

