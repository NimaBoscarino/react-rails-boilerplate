class Review < ApplicationRecord
  belongs_to :artist
  belongs_to :client

  def self.artistreview(artist_id)
    reviews = Review.where(artist_id: artist_id)
  end
end
