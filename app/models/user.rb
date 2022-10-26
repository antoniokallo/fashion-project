class User < ApplicationRecord
    has_secure_password
    has_many :user_clothings
    has_many :clothings, through: :user_clothings


end
