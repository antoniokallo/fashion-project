class Clothing < ApplicationRecord
    belongs_to :manufacturer
    belongs_to :brand
end
