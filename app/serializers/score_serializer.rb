class ScoreSerializer < ActiveModel::Serializer
  attributes :id, :name, :attempts, :time
end
