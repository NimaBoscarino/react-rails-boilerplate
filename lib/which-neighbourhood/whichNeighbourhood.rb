require 'border_patrol'

def whichNeighbourhood(lat, long)

  coal_harbour = BorderPatrol.parse_kml(File.read('/home/bobby/work/final-project/lib/which-neighbourhood/neighbourhood-data/coal-harbour.kml'))
  if coal_harbour.contains_point?(long, lat)
    return "Coal Harbour"
  end
  downtown_eastside = BorderPatrol.parse_kml(File.read('/home/bobby/work/final-project/lib/which-neighbourhood/neighbourhood-data/downtown-eastside.kml'))
  if downtown_eastside.contains_point?(long, lat)
    return "Downtown Eastside"
  end
  chinatown = BorderPatrol.parse_kml(File.read('/home/bobby/work/final-project/lib/which-neighbourhood/neighbourhood-data/chinatown.kml'))
  if chinatown.contains_point?(long, lat)
    return "Chinatown"
  end
  gastown = BorderPatrol.parse_kml(File.read('/home/bobby/work/final-project/lib/which-neighbourhood/neighbourhood-data/gastown.kml'))
  if gastown.contains_point?(long, lat)
    return "Gastown"
  end
  ubc = BorderPatrol.parse_kml(File.read('/home/bobby/work/final-project/lib/which-neighbourhood/neighbourhood-data/ubc.kml'))
  if ubc.contains_point?(long, lat)
    return "UBC"
  end
  arbutus_ridge = BorderPatrol.parse_kml(File.read('/home/bobby/work/final-project/lib/which-neighbourhood/neighbourhood-data/arbutus-ridge.kml'))
  if arbutus_ridge.contains_point?(long, lat)
    return "Arbutus Ridge"
  end
  downtown = BorderPatrol.parse_kml(File.read('/home/bobby/work/final-project/lib/which-neighbourhood/neighbourhood-data/downtown.kml'))
  if downtown.contains_point?(long, lat)
    return "Downtown"
  end
  yaletown = BorderPatrol.parse_kml(File.read('/home/bobby/work/final-project/lib/which-neighbourhood/neighbourhood-data/yaletown.kml'))
  if yaletown.contains_point?(long, lat)
    return "Yaletown"
  end
  dunbar_southlands = BorderPatrol.parse_kml(File.read('/home/bobby/work/final-project/lib/which-neighbourhood/neighbourhood-data/dunbar-southlands.kml'))
  if dunbar_southlands.contains_point?(long, lat)
    return "Dunbar Southlands"
  end
  fairview = BorderPatrol.parse_kml(File.read('/home/bobby/work/final-project/lib/which-neighbourhood/neighbourhood-data/fairview.kml'))
  if fairview.contains_point?(long, lat)
    return "Fairview"
  end
  grandview_woodland = BorderPatrol.parse_kml(File.read('/home/bobby/work/final-project/lib/which-neighbourhood/neighbourhood-data/grandview-woodland.kml'))
  if grandview_woodland.contains_point?(long, lat)
    return "Grandview Woodland"
  end
  hastings_sunrise = BorderPatrol.parse_kml(File.read('/home/bobby/work/final-project/lib/which-neighbourhood/neighbourhood-data/hastings-sunrise.kml'))
  if hastings_sunrise.contains_point?(long, lat)
    return "Hastings Sunrise"
  end
  kensington_cedar_college = BorderPatrol.parse_kml(File.read('/home/bobby/work/final-project/lib/which-neighbourhood/neighbourhood-data/kensington-cedar-college.kml'))
  if kensington_cedar_college.contains_point?(long, lat)
    return "Kensignton Cedar College"
  end
  kerrisdale = BorderPatrol.parse_kml(File.read('/home/bobby/work/final-project/lib/which-neighbourhood/neighbourhood-data/kerrisdale.kml'))
  if kerrisdale.contains_point?(long,lat)
    return "Kerrisdale"
  end
  killarney = BorderPatrol.parse_kml(File.read('/home/bobby/work/final-project/lib/which-neighbourhood/neighbourhood-data/killarney.kml'))
  if killarney.contains_point?(long, lat)
    return "Killarney"
  end
  kitsilano = BorderPatrol.parse_kml(File.read('/home/bobby/work/final-project/lib/which-neighbourhood/neighbourhood-data/kitsilano.kml'))
  if kitsilano.contains_point?(long, lat)
    return "Kitsilano"
  end
  marpole = BorderPatrol.parse_kml(File.read('/home/bobby/work/final-project/lib/which-neighbourhood/neighbourhood-data/marpole.kml'))
  if marpole.contains_point?(long, lat)
    return "Marpole"
  end
  mount_pleasant = BorderPatrol.parse_kml(File.read('/home/bobby/work/final-project/lib/which-neighbourhood/neighbourhood-data/mount-pleasant.kml'))
  if mount_pleasant.contains_point?(long, lat)
    return "Mount Pleasant"
  end
  oakridge = BorderPatrol.parse_kml(File.read('/home/bobby/work/final-project/lib/which-neighbourhood/neighbourhood-data/oakridge.kml'))
  if oakridge.contains_point?(long, lat)
    return "Oakridge"
  end
  renfrew_collingwood = BorderPatrol.parse_kml(File.read('/home/bobby/work/final-project/lib/which-neighbourhood/neighbourhood-data/renfrew-collingwood.kml'))
  if renfrew_collingwood.contains_point?(long, lat)
    return "Renfrew Collingwood"
  end
  riley_park = BorderPatrol.parse_kml(File.read('/home/bobby/work/final-project/lib/which-neighbourhood/neighbourhood-data/riley-park.kml'))
  if riley_park.contains_point?(long, lat)
    return "Riley Park"
  end
  shaughnessy = BorderPatrol.parse_kml(File.read('/home/bobby/work/final-project/lib/which-neighbourhood/neighbourhood-data/shaughnessy.kml'))
  if shaughnessy.contains_point?(long, lat)
    return "Shaughnessy"
  end
  south_cambie = BorderPatrol.parse_kml(File.read('/home/bobby/work/final-project/lib/which-neighbourhood/neighbourhood-data/south-cambie.kml'))
  if south_cambie.contains_point?(long, lat)
    return "South Cambie"
  end
  strathcona = BorderPatrol.parse_kml(File.read('/home/bobby/work/final-project/lib/which-neighbourhood/neighbourhood-data/strathcona.kml'))
  if strathcona.contains_point?(long, lat)
    return "Strathcona"
  end
  sunset = BorderPatrol.parse_kml(File.read('/home/bobby/work/final-project/lib/which-neighbourhood/neighbourhood-data/sunset.kml'))
  if sunset.contains_point?(long, lat)
    return "Sunset"
  end
  victoria_fraserview = BorderPatrol.parse_kml(File.read('/home/bobby/work/final-project/lib/which-neighbourhood/neighbourhood-data/victoria-fraserview.kml'))
  if victoria_fraserview.contains_point?(long, lat)
    return "Victoria Fraserview"
  end
  west_end = BorderPatrol.parse_kml(File.read('/home/bobby/work/final-project/lib/which-neighbourhood/neighbourhood-data/west-end.kml'))
  if west_end.contains_point?(long, lat)
    return "West End"
  end
  west_point_grey = BorderPatrol.parse_kml(File.read('/home/bobby/work/final-project/lib/which-neighbourhood/neighbourhood-data/west-point-grey.kml'))
  if west_point_grey.contains_point?(long, lat)
    return "West Point Grey"
  end

  return "Unknown"

end

# A few simple tests
# puts "Should return Coal Harbour"
# puts whichNeighbourhood(49.288875, -123.125221)
# puts "Should return nothing"
# puts whichNeighbourhood(49.299213, -123.129840)
# puts "Should return Chinatown"
# puts whichNeighbourhood(49.280297, -123.105474)
# puts "Should return Gastown"
# puts whichNeighbourhood(49.284636, -123.108584)
# puts "Should return UBC"
# puts whichNeighbourhood(49.264083, -123.243338)
# puts "I'm not really sure what this should return."
# puts whichNeighbourhood(49.237740, -123.062446)