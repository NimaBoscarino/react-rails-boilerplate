class PopularTime < ApplicationRecord
  serialize :types, Array
  serialize :popular_times, Array
  serialize :time_spent, Array
end
