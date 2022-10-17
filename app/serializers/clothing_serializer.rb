class ClothingSerializer < ActiveModel::Serializer
  attributes :id, :clothing_type, :brand_id, :where_made, :image, :sus_clothing_id
end
