class UserClothing < ApplicationRecord
    belongs_to :clothing
    belongs_to :user
end
