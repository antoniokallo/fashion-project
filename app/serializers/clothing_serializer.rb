class ClothingSerializer < ActiveModel::Serializer
  attributes :id, :clothing_type, :brand_id, :where_made, :image, :manufacturer_id
end
