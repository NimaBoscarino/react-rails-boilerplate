require 'nokogiri'
require 'geocoder'

allfiles = Dir["../lib/which-neighbourhood/neighbourhood-data/*.kml"]

allfiles.each do |file|
  doc = Nokogiri::XML(File.open(file))

  thisName = doc.at_css("Placemark").at_css("name").to_s[6..-8]

  puts thisName

  coordinates = doc.at_css("coordinates")
  coordinatesArray = coordinates.to_s.split

  coordinatesArray.delete_at(0)
  coordinatesArray.delete_at(coordinatesArray.length - 1)

  coordinatesArray.map! { |set| set.split(",") }
  coordinatesArray.map! {
    |set| set[0], set[1] = set[1], set[0]
  }

  centerCoordinates = Geocoder::Calculations.geographic_center(coordinatesArray)

  puts centerCoordinates
end