class Place < ApplicationRecord
    attr_accessor :all_types

    has_many :popular_times, dependent: :destroy
    has_many :types, dependent: :destroy
    has_many :time_waits, dependent: :destroy
    belongs_to :neighbourhood
end
