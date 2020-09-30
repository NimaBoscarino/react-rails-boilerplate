class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :activity_id
end
