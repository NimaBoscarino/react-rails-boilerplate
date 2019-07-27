import sys
import populartimes
import json

north = float(sys.argv[1])
south = float(sys.argv[2])
east = float(sys.argv[3])
west = float(sys.argv[4])
typing = sys.argv[5]

data = (populartimes.get(ENV['GOOGLE_API_KEY'], [typing], (north, east), (south, west), all_places = False, n_threads = 4))
print (json.dumps(data, separators=(',',':')))

#print (populartimes.get_id(ENV['GOOGLE_API_KEY'], "ChIJGdCptHhxhlQR5OKcIP64od4"))