class SusClothingSerializer < ActiveModel::Serializer
  attributes :id, :storename, :location, :sustainability, :image
end
