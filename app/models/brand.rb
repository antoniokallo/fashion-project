class Brand < ApplicationRecord
has_many :clothings
has_many :manufacturers, through: :clothings
has_many :closets, through: :clothings
end
