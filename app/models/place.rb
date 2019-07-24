class Place < ApplicationRecord
    has_many :popular_times
    has_many :types
    has_many :time_waits
    belongs_to :neighbourhood
end
