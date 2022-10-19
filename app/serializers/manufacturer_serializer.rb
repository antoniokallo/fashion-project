class ManufacturerSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :sustainability, :image
end
