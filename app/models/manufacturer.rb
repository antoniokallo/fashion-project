class Manufacturer < ApplicationRecord
    has_many :clothings
    has_many :brands, through: :clothings
end
