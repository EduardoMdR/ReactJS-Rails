class UserSerializer < ActiveModel::Serializer
include Rails.application.routes.url_helpers

  attributes :id, :name, :role_id, :image_url

  def image_url
    if Object.image.attached?
      rails_blob_path(Object.image, only_path: true)
    else
      'image not found'
    end
  end
end
