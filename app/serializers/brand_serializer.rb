class BrandSerializer < ActiveModel::Serializer
  attributes :id, :brandname, :manufacturer, :location, :full_img, :image, :details
end
