class Clothing < ApplicationRecord
    belongs_to :manufacturer
    belongs_to :brand
    has_many :user_clothings
    has_many :users, through: :user_clothings
end
