class Place < ApplicationRecord
    attr_accessor :all_types

    has_many :popular_times, dependent: :destroy
    has_many :types, dependent: :destroy
    has_many :time_waits, dependent: :destroy
    has_many :google_opening_hours, dependent: :destroy
    has_many :google_photos, dependent: :destroy
    has_many :google_reviews, dependent: :destroy
    has_many :yelp_categories, dependent: :destroy
    has_many :yelp_photos, dependent: :destroy
    has_many :yelp_opening_hours, dependent: :destroy
    has_many :yelp_reviews, dependent: :destroy
    belongs_to :neighbourhood
end
