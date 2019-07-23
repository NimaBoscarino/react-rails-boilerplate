class Place < ApplicationRecord
    has_many :popular_times
    has_many :types
    has_many :time_waits
end
