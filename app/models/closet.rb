class Closet < ApplicationRecord
has_many :clothing
belongs_to :user
end
