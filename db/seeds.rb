# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

## USERS 
User.destroy_all

al = User.create!(
  first_name: 'Andy',
  last_name: 'Lindsay',
  email: 'jstamos@lhl.com',
  password: '12345'
)
# cc = User.create!(
#   first_name: 'Caia',
#   last_name: 'Chuang',
#   email: 'caiachuang@gmail.com',
#   password: '12345'
# )

# jc = User.create!(
#   first_name: 'Jenny',
#   last_name: 'Citherlet',
#   email: 'jennycith@gmail.com',
#   password: '12345'
# )

# js = User.create!(
#   first_name: 'Jeffrey',
#   last_name: 'Shao',
#   email: 'shaoyuhao970909@gmail.com',
#   password: '12345'
# )

## ACTIVITIES
Activity.destroy_all

act1 = Activity.create!({
  title:  'Wild Whales Vancouver',
  description: 'Wild Whales Vancouver is situated on Granville Island, a 5-10 minute taxi ride from most downtown hotels. The 50 bus will drop you off at the entrance to the Island or Granville Island Ferries and Aquabus will shuttle you across from various departure points along the seawall directly to Granville Island.',
  image_url: 'https://img.grouponcdn.com/pwa_test/2dVewtoksTr3YQJb58g33yRckrtJ/2d-669x446/v1/c700x420.jpg',
  city: 'Vancouver',
  address: '1806 Mast Tower Road, Vancouver, 5H8 1B9',
  price_per_person: 160,
  max_number_of_participants: 15,
  date: "11/10/2020",
})

act2 = Activity.create!({
  title:  'TAG Whistler',
  description: 'The Adventure Group is Whistler’s premier year-round activity operator representing the BEST of Whistler! Only moments from Whistler Village our team offers summer adventures including Whitewater Rafting, RZR Tours, Biking and Jet-Boating. Fly the world\'s most spectacular ziplines in Canada with Superfly Ziplines and swing from the trees in our Treetop Adventure course.',
  image_url: 'https://s3.amazonaws.com/lmpm-wordpress-media-store-prod/wp-content/uploads/sites/2/2019/11/whistler-ziplining-summer2.jpg',
  city: 'Whistler',
  address: '211-4293 Mountain Square, Whistler, 9V0 1B8',
  price_per_person: 60,
  max_number_of_participants: 6,
  date: "11/11/2020",
})

act3 = Activity.create!({
  title:  'False Creek',
  description: "Starting at Canada Place in downtown Vancouver's waterfront area, cyclists can head west towards Stanley Park along the seawall, watching as boats, seaplanes, and even cruise ships come and go from Vancouver's busy harbour. ",
  image_url: 'https://assets.simpleviewinc.com/simpleview/image/upload/crm/vancouverbc/36063825_1765144223565391_9176726802234605568_o0-2c0eef5f5056b3a_2c0ef07d-5056-b3a8-49f2dcf5a798010f.jpg',
  city: 'Vancouver',
  address: '10 - 73 E 6th Avenue, Vancouver,  3G9 7B0',
  price_per_person: 45,
  max_number_of_participants: 5,
  date: "1/10/2021",
})

Activity.create!({
  title:  'Capilano Canyon',
  description: "Just up the road from Capilano Suspension Bridge, Capilano River Regional Park features a 2.6 kilometre (1.6 mile) trail that winds through the canyon, passing streams and stunning views of the surrounding mountains. It only gains about 100 metres (329 feet) in elevation, so this trail is open to hikers of most fitness levels. The trail also passes through the Capilano Salmon Hatchery, a free attraction offering an up-close look at the migrating salmon in the river (8 am – dusk). ",
  image_url: 'https://hiltonsuggests.hilton.com/wp-content/uploads/2020/02/Capilano-Suspension-Bridge-Park-attractions-review.jpg',
  city: 'North Vancouver',
  address: 'Cleveland Dam',
  price_per_person: 47,
  max_number_of_participants: 10,
  date: "06/09/2021",
})

Activity.create!({
  title:  'Stanley Park',
  description: "Considered one of the greatest urban parks in the world, Stanley Park offers hikers of all ability levels a variety of outdoor treks. The paved seawall has separated lanes for walking and biking, allowing for a leisurely sightseeing stroll along the park’s coastline. The seawall, deservedly, draws thousands of visitors and locals on a daily basis, but there are numerous, quiet nature hikes through the central parts of the park. Work up a sweat with a 6 kilometre (3.7 mile) loop through temperate rainforest. The walking path passes the park’s gardens and Beaver Lake, and it hits the water near Third Beach.",
  image_url: 'https://images.dailyhive.com/20180808095258/shutterstock_725540002.jpg',
  city: 'Vancouver',
  address: 'Stanley Park',
  price_per_person: 10,
  max_number_of_participants: 8,
  date: "10/09/2020",
})

Activity.create!({
  title:  'Bird Watching',
  description: "Located to the south of Vancouver in the suburb of Ladner, the George C. Reifel Migratory Bird Sanctuary is a fantastic spot to view migratory species as they rest on their journey north or south along the Pacific Flyway. Reifel offers 300 hectares (850 acres) of managed wetlands and natural marshes along the Fraser River Estuary. ",
  image_url: 'https://cdn.birdwatchingdaily.com/2020/01/magee-marsh-shutterstock_193706975.jpg',
  city: 'Delta',
  address: '5191 Robertson Road, Delta, 0V5 1N8',
  price_per_person: 100,
  max_number_of_participants: 2,
  date: "08/08/2021",
})

Activity.create!({
  title:  'Kayaking in Victoria',
  description: "Kayaking is the best way to see Victoria. We specialize in safe, fun and educational kayak tours of Victoria's Harbour and waterfront. Our floating location at Fisherman's Wharf is a 10 minute walk from the cruise ship terminal and 20 minutes from downtown on the scenic boardwalk. We are the closest kayak shop to the Juan de Fuca straight, so when conditions allow, we will paddle along the coast to the kelp forests and an island the harbour seals frequent.",
  image_url: 'https://www.oceankayaking.com/wp-content/uploads/2018/01/Kayaking-Tofino-Ucluelet.jpg',
  city: 'Victoria',
  address: '1006 Wharf St, Victoria, V8W 1T4',
  price_per_person: 90,
  max_number_of_participants: 20,
  date: "09/06/2021",
})

Activity.create!({
  title:  'Dead Lake',
  description: "This is our most popular day fly-out. Fantastic facilities, a beautiful beach, excellent season-long walleye and pike fishing, reasonable rates - what's not to love? The lake can accommodate the largest groups. There is an ADI outpost camp on the lake just in case the weather gets ugly with a beautiful beach for shore lunch!",
  image_url: 'https://images.squarespace-cdn.com/content/v1/57b9b98a29687f1ef5c622df/1477908742298-Z2KX2BLRPGTGC5RCJEGM/ke17ZwdGBToddI8pDm48kNub02L0uULUCOuILx7ZxY8UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcYApxGE1ZEVFHy9_t5q5kQLGegzyj9kger3C3iinxUowEpV9f-KiSqcIke-dO9nIh/flooded+trees+lake?format=1500w',
  city: 'Squamish',
  address: '150 Squamah Road, Squamish, BC, V5T 0W8',
  price_per_person: 6,
  max_number_of_participants: 4,
  date: "12/10/2020",
})

Activity.create!({
  title:  'Hickson Lake',
  description: "Unbelievable lake trout fishing and scenery! Hickson Lake Outpost Camp is the closest trout fishing outpost camp to Thompson's Camps Otter Lake Resort. Surrounded on all sides by incredible Canadian Shield scenery and numerous Native American Rock Paintings, this outpost camp is the perfect location to kick back and relax.",
  image_url: 'https://live.staticflickr.com/7795/27638704875_f58b1f4853_b.jpg',
  city: 'Squamish',
  address: '4530 Dometa Street, Squamish, V5T 0W8',
  price_per_person: 35,
  max_number_of_participants: 3,
  date: "20/11/2020",
})

Activity.create!({
  title:  'Scenic Flight',
  description: "Take a load off and enjoy the beautiful scenery with a view from up above. Look for the incredible Nistowiak falls on the rapid river and see the Holy Trinity Anglican Church, the oldest standing building in BC! Flight time is approximately 40 minutes with a 7:00 PM departure.",
  image_url: 'https://breakawayexperiences.com/content/images/thumbs/0011032_sea-to-sky-scenic-flight.jpeg',
  city: 'Vancouver',
  address: '4545 Georgia Street, Vancouver, V9E 0T5',
  price_per_person: 85,
  max_number_of_participants: 6,
  date: "12/10/2020",
})

Activity.create!({
  title:  'Segway Tours',
  description: "Enjoy the sights along Summerside's Boardwalk and glide along on a guided Segway tour. There are daily one and two hour experiences departing from Spinnaker's Landing on the Waterfront. The Lighthouse is open and there's no better time to get out and try a Segway Personal Transporter.",
  image_url: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/70/04/df.jpg',
  city: 'Squamish',
  address: '12 Waterfront Road, Squamish V5T 0R5',
  price_per_person: 24,
  max_number_of_participants: 20,
  date: "11/11/2020",
})

Activity.create!({
  title:  'Harbour Front Theatre',
  description: "Harbour Front Theatre aims to provide a continuous live entertainment service to the Island community and its visitors, featuring both local and touring productions, while being the driving force within the community to encourage and nurture live performing arts.",
  image_url: 'https://www.harbourfrontcentre.com/images/who/venues/hfct1.jpg',
  city: 'Vancouver',
  address: '23 Canada Way, Vancouver, V4T 0E2',
  price_per_person: 19,
  max_number_of_participants: 20,
  date: "09/08/2020",
})

Activity.create!({
  title:  'Piping and CelticArts',
  description: "Celtic culture comes alive at The College of Piping & Celtic Performing Arts of Canada! The College has developed a world-class reputation as an international school of excellence in Highland bagpiping, Scottish-style drumming, Highland dancing and Island step dancing.",
  image_url: 'https://collegeofpiping.com/wp-content/uploads/2019/07/carrousel_3.png',
  city: 'North Vancouver',
  address: '45 Marine Drive, Vancouver, 5BU 4F6',
  price_per_person: 12,
  max_number_of_participants: 15,
  date: "04/05/2021",
})

Activity.create!({
  title:  'Eptek Art',
  description: "Eptek Art & Culture Centre offers regional and Prince Edward Island exhibits year round. Showcases include themes ranging from history to art, including periodic displays of the permanent collection of paintings by the late Dr. Georgie Read Barton. Plan a visit to the Eptek Art & Culture Centre to sample the rich culture that Islanders and visitors alike find intriguing.",
  image_url: 'https://i1.wp.com/www.roadtripsandrollercoasters.com/wp-content/uploads/2018/06/36780859933_829cf88cf4_b.jpg?resize=1024%2C768&ssl=1',
  city: 'North Vancouver',
  address: '23 Potoma Way, North Vancouver, V4T 0E2',
  price_per_person: 9,
  max_number_of_participants: 20,
  date: "07/06/2020",
})

Activity.create!({
  title:  "Spinnakers' Landing",
  description: "Spinnakers' Landing is one of Summerside's great marketplaces situated within a recreated fishing village. A collection of crafts, retail merchants and dining options await your visit. Located directly across from the Loyalist on the Harbourfront. Seasonal outdoor entertainment is also provided at this location.",
  image_url: 'https://i1.wp.com/welcomepei.com/wp-content/uploads/2013/04/Spinnakers-Landing-1.jpg?resize=600%2C400&ssl=1',
  city: 'Squamish',
  address: '12 Mimaq Road, Squamish V5T 0R5',
  price_per_person: 10,
  max_number_of_participants: 12,
  date: "07/08/2021",
})

Activity.create!({
  title:  "Norton Museum of Art",
  description: "The Norton Museum is recognized internationally for its expansive collection of more than 7,000 works, including European, Impressionist, and Modern Masters, and American art from 1900 to the present. The Museum Store offers an eclectic array of gifts and Café 1451 at the Norton offers delicious lunch and happy hour menus.",
  image_url: 'https://www.norton.org/themes/norton/assets/images/og-default.jpg',
  city: 'Whistler',
  address: '4545 Blackcomb Way, Whistler, B8E 0W7',
  price_per_person: 27,
  max_number_of_participants: 10,
  date: "12/12/2020",
})

Activity.create!({
  title:  "The Society of the Four Arts",
  description: "The Society of the Four Arts is the for art, music, drama and literature. They offer hundreds of cultural programs including children's programs, films, lifelong learning, concerts, exhibitions, lectures and more. The Four Arts campus includes a library and children's library, an exhibition gallery, 700-seat auditorium, botanical and sculpture gardens, and a state-of-art lifelong learning facility for classes on painting, opera and so much more.",
  image_url: 'https://media-cdn.tripadvisor.com/media/photo-s/12/41/0d/a0/society-of-the-four-arts.jpg',
  city: 'Vancouver',
  address: '432 Capilano Drive,Vancouver, E89 A3E',
  price_per_person: 12,
  max_number_of_participants: 20,
  date: "05/04/2021",
})

Activity.create!({
  title:  "Vancouver Zoo",
  description: "The Vancouver Zoo houses over 1,400 animals within 23 acres of lush tropical habitat. Its mission is to provide an open-air classroom of living creatures to foster awareness, appreciation and respect for the natural world. In addition, the zoo features a colorful carousel, an interactive water play fountain, a full service restaurant, daily performances of the bird show, and many other programs and events throughout each day.",
  image_url: 'https://assets.simpleviewinc.com/simpleview/image/upload/crm/vancouverbc/greater_vancouver_zoo2_b90b27da-5056-b3a8-49d904d5e084dede.jpg',
  city: 'Vancouver',
  address: '3493 Denman Stree, Vancouver A4R 3B7',
  price_per_person: 27,
  max_number_of_participants: 12,
  date: "08/09/2020",
})

Activity.create!({
  title:  "Delta Science Museum",
  description: "The Delta Science Center and Aquarium features more than 50 hands-on educational exhibits, a 3,000 gallon fresh and salt water aquarium featuring both local and exotic marine life, a digital planetarium, Conservation Research Station,  Exhibit Hall and an interactive Everglades Exhibit showcasing the richly diverse ecosystem that the  water-environment supports. The Science Center also includes several outdoor activities including miniature golf, a winding Science Trail where visitors can dig for fossils, a butterfly garden and much more.",
  image_url: 'https://www.discoverbenelux.com/wp-content/uploads/2019/11/1-NEMO-Humania-entree-Foto-DigiDaan.jpg',
  city: 'Delta',
  address: '38 Elizabeth Street, Delta, 8V6 1B6',
  price_per_person: 37,
  max_number_of_participants: 10,
  date: "04/01/2020",
})

Activity.create!({
  title:  "Morikami Japanese Garden",
  description: "Morikami Museum and Japanese Gardens has been a center for Japanese arts and culture since its opening in 1977. The Morikami invites guests to discover Vancouver and its connection with Japan, and explore a series of six diverse gardens inspired by a different historical period and style of Japanese gardening. Experience traditional and contemporary Japanese culture through world-class exhibits, varied educational programs and seasonal events, bonsai display, Pan-Asian cuisine and a distinctive museum store.",
  image_url: 'https://www.miamiherald.com/latest-news/6qy9nz/picture226101480/alternates/FREE_1140/20190125_121339.jpg',
  city: 'North Vancouver',
  address: '7533 Albani Road, North Vancouver, 1B7 8M4',
  price_per_person: 22,
  max_number_of_participants: 10,
  date: "07/07/20",
})

Activity.create!({
  title:  "Ann Norton Sculpture Gardens",
  description: "The Ann Norton Sculpture Gardens is devoted to exhibiting works of other artists, preserving the founder's studio and displaying her monumental sculptures in a secluded urban preserve where a notable collection of rare palms is continually being developed.",
  image_url: 'https://static.themarthablog.com/2019/03/IMG_4666.jpg',
  city: 'Vancouver',
  address: '11 Pacific Avenue, Vancouver, 2B7 1C8',
  price_per_person: 20,
  max_number_of_participants: 10,
  date: "06/01/2021",
})

Activity.create!({
  title:  "Lake trail",
  description: "The Lake Trail is a five mile path stretching along the west side of Vancouver from Worth Avenue to Indian Road. The trail was built by Henry Flagler in 1894 to serve as a promenade for guests to Vancouver. Walk, rollerblade or rent a bicycle from the Bellmen.",
  image_url: 'https://az837918.vo.msecnd.net/publishedimages/listings/6175/en-CA/images/3/lily-lake-trail-L-5.jpg',
  city: 'North Vancouver',
  address: '11 Marine Drive, North Vancouver, 2B7 1C8',
  price_per_person: 11,
  max_number_of_participants: 8,
  date: "01/09/2021",
})

Activity.create!({
  title:  "Sawgrass Recreation Park",
  description: "Discover the Canadian Everglades on a thrilling airboat adventure. Glide over the sawgrass and cattails and let your spirit soar as you hear the stories of this unique environment. Hold an alligator and see a Canadian Panther in the animal exhibit areas featuring over 100 mammals and reptiles.",
  image_url: 'https://media-cdn.tripadvisor.com/media/photo-s/05/fe/6a/f9/sawgrass-recreation-park.jpg',
  city: 'North Vancouver',
  address: '34 SeaLion Avenue, North Vancouver, 2B7 1C8',
  price_per_person: 27,
  max_number_of_participants: 10,
  date: "10/10/2020",
})

Activity.create!({
  title:  "Antique Row",
  description: "A charming district with over 40 antique shops offering an impressive selection of 17th to 20th century antiques, fine and decorative arts, period décor, vintage and modern furnishings and much more. All within walking distance, this vast array of quality antique stores, specialty shops and art galleries are complemented by several award-winning restaurants. Architectural Digest, The New York Times, Art & Antiques and House Beautiful have all heralded Antique Row as one of the East Coast's premier antique shopping districts, considered the antique design center of Delta.",
  image_url: 'https://downtownchamblee.com/wp-content/uploads/2014/09/052014-downtown-Chamblee-4.jpg',
  city: 'Delta',
  address: '89 Carlsbad Avenue, Delta, V83 V2B',
  price_per_person: 25,
  max_number_of_participants: 10,
  date: "07/12/2020",
})

Activity.create!({
  title:  "Classic Cruises of Vancouver",
  description: "Classic Cruises of Vancouver is the local favorite for sailing and power boat tours and sunset harbor cruises. Enjoy breathtaking sailing and power boat tours offering spectacular views of  Vancouver Harbor, Narragansett Bay and the excitement of the Sailing Capital of Canada.",
  image_url: 'https://ahoybc.com/wp-content/uploads/2015/03/SC-Harmony-Islands-AlbertNormandin.jpg',
  city: 'North Vancouver',
  address: '12 Marine Drive, North Vancouver, 1B7 V0N',
  price_per_person: 55,
  max_number_of_participants: 8,
  date: "07/07/2021",
})

Activity.create!({
  title:  "Viking Tours of Vancouver",
  description: "Since 1962, Viking Tours has been showing visitors to Vancouver the amazing history of the city. You are invited to travel from the Modern Age to the Gilded Age during one of their specialty tours. Only Viking Tours gives you an insider’s look into Vancouver aboard our old-fashioned trolleys and modern motorcoaches. Voted by the readers of Vancouver Life Magazine as Best Tour – Land, Sea or Sky 2009, 2011 & 2013!",
  image_url: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/12/a6/0a.jpg',
  city: 'North Vancouver',
  address: '23 Lions Bay Avenue, North Vancouver, 2B7',
  price_per_person: 37,
  max_number_of_participants: 10,
  date: "09/11/2020",
})

Activity.create!({
  title:  "Vancouver National Golf Club",
  description: "Designed by legendary golf architect Arthur Hills and his associate Drew Rogers, the Orchard Course at Vancouver National Golf Club spans almost 200 acres of former shrub and tree nurseries that offer sweeping views of Vancouver Island.",
  image_url: 'https://golfadvisor.brightspotcdn.com/dims4/default/7a3d798/2147483647/strip/true/crop/1210x781+0+13/resize/930x600!/quality/90/?url=https%3A%2F%2Fgolfadvisor.brightspotcdn.com%2Ffe%2F8e%2F401fcb3d5aea6ca2dde7573a978b%2F52243.jpg',
  city: 'Vancouver',
  address: '15 University Avenue, Vancouver, A7B 8YC',
  price_per_person: 115,
  max_number_of_participants: 12,
  date: "06/08/2020",
})

Activity.create!({
  title:  "International Tennis Hall",
  description: "Discover the history of tennis and its superstars through a diverse collection of memorabilia, art, video & more from the 12th century through today. The Museum is housed within stunning Victorian architecture and surrounded by grass tennis courts.",
  image_url: 'https://cdn.guestfolio.net/system/listing/images/000/012/991/default.jpg?1392281171',
  city: 'North Vancouver',
  address: '28 George Street, North Vancouver, 2B7 1Z9',
  price_per_person: 27,
  max_number_of_participants: 10,
  date: "03/09/2020",
})

Activity.create!({
  title:  "Quicksilver Surf School",
  description: "A visit to Squamish wouldn’t be complete without grabbing your board, dipping in the ocean and releasing your inner Mr Slater! And as a hotel guest, you’ll be able to grab a deal with a discounted rate.",
  image_url: 'https://tourismtofino.com/wp-content/uploads/2017/08/TFS-surfer.jpg',
  city: 'Squamish',
  address: '12 Waterend Street, Squamish, P9C 1V7',
  price_per_person: 42,
  max_number_of_participants: 10,
  date: "07/07/2020",
})

Activity.create!({
  title:  "Coasteering",
  description: "The Quiksilver Surf School also offers coasteering sessions year round. If you haven't come across it before, coasteering gives you the opportunity to explore how the Pacific Ocean has sculpted the rugged and beautiful coast line of Vancouver. The adrenaline filled adventure takes you from secluded beaches to smugglers coves and secret caves, now inhabited by seals and stunning sea life.",
  image_url: 'https://www.northwalesactive.co.uk/s/cc_images/teaserbox_2470496536.JPG?t=1561992725',
  city: 'North Vancouver',
  address: '9863 Victoria Street, North Vancouver, 1B7 3C7',
  price_per_person: 52,
  max_number_of_participants: 8,
  date: "10/09/2020",
})

Activity.create!({
  title:  "Whistler Children's Museum",
  description: "If you have kids (or just like to act like them!), the Whistler Children’s Museum is a must-see destination. Their motto of “Play, Learn, Imagine, Create” shines through in the wide variety of interactive exhibits that allow children to explore everything from a supermarket to a television studio, picking up valuable lessons along the way.",
  image_url: 'https://i.cbc.ca/1.4946447.1547768637!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/london-children-s-museum.jpg',
  city: 'Whistler',
  address: '7123 Nancy Green Drive, Whistler, B8E 0W9',
  price_per_person: 14,
  max_number_of_participants: 10,
  date: "02/02/2021",
})

Activity.create!({
  title:  "Vancouver Seaquarium",
  description: "The Vancouver Seaquarium is located right in the middle of the tourist area, on the causeway between downtown North Vancouver and the airport. It’s a fabulous stop where you can witness an outdoor aquarium experience that’s only possible in our tropical climate.",
  image_url: 'https://www.aquatique-vacances.com/media/9558/initial/seaquarium-grau-du-roi-gard-occitanie.jpg',
  city: 'Vancouver',
  address: '23 Whale Street, Vancouver, 4B7 9C2',
  price_per_person: 29,
  max_number_of_participants: 10,
  date: "04/02/2021",
})

Activity.create!({
  title:  "Melreese Golf Club",
  description: "Enjoy a round of golfing conveniently located near the VancouverInternational Airport is the Melreese Golf Course. 18 rounds of expertly laid out golfing. Home to several university teams including the University of Vancouver, the course offers competitive year round rates.",
  image_url: 'https://s3.amazonaws.com/golfcanada/app/uploads/golfcanada/production/2019/09/16111601/ISLINGTON_GOLF_CLUB_1000.jpg',
  city: 'Delta',
  address: '14 Green Avenue, Delta, 9V6 19',
  price_per_person: 95,
  max_number_of_participants: 4,
  date: "07/07/2021",
})

Activity.create!({
  title:  "Zoo Whistler",
  description: "Zoo Whistler is fast becoming one of the best zoos in the nation. Its climate allows it to keep a wide variety of animals from Asia, Australia and Africa like no other zoo in the country.",
  image_url: 'https://www.calgaryzoo.com/sites/default/files/styles/hero_large/public/2018-05/zoo-hero-destinationspages-CanadianWilds.jpg?itok=dHNiipKP',
  city: 'Whistler',
  address: '4567 Gables Street, Whistler, C2N 0W7',
  price_per_person: 37,
  max_number_of_participants: 4,
  date: "02/02/2021",
})

Activity.create!({
  title:  "Lanes and Arcades Tour",
  description: "Vancouver's laneways are one of its signature sightseeing attractions, and for those looking at some of the true hidden gems the city has to offer, these guided laneways walking tours will show you a side of Vancouver' you might have otherwise missed! Join this 3 hour walk through Vancouver's both famous and more secret lanes and arcades as your guide highlights what makes each one special; though they may be well known, their individual charm will soon become apparent. 3 hour tour.",
  image_url: 'https://thebigbus.com.au/wp-content/uploads/2018/09/bigstock-172484213-V3.jpg',
  city: 'North Vancouver',
  address: '11 Waterfront Station, North Vancouver, 4B8 1V9',
  price_per_person: 8,
  max_number_of_participants: 20,
  date: "03/11/2020",
})

Activity.create!({
  title:  "The Golden Mile Heritage",
  description: "It is a ‘must do’ activity in the city for history buffs and is also a wonderful way for visitors to orientate themselves around the important historical points of the city. With a registered professional tour guide learn about Delta’s history and heritage first hand. The Walk is approximately 2.5 hours duration.",
  image_url: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/71/23/37.jpg',
  city: 'Delta',
  address: '8731 Main Street, Delta 1C9 3Z3',
  price_per_person: 9,
  max_number_of_participants: 10,
  date: "03/09/2021",
})

Activity.create!({
  title:  "Squamish Valley Wine Tour",
  description: "Wine is only half the story of the Squamish Valley - book this great value gourmet tour and taste fresh fruits, wines, cheeses, pasta, meats and much more! During this wonderful journey into this famously verdant region of Squamish which departs from Vancouverat 9:00am, you'll pay a visit to some of the premier wineries of the Squamish Valley - including the iconic Rochford and DeBortoli - while combining these fine drinks with stops at various other locations which will indulge your palate. Full day tour.",
  image_url: 'https://www.niagarafuntours.com/wp/wp-content/uploads/2011/07/slide-2-1.jpg',
  city: 'Squamish',
  address: '9344 Karmendi Road, Squamish, V01B7Z',
  price_per_person: 42,
  max_number_of_participants: 6,
  date: "08/09/2020",
})

Activity.create!({
  title:  "Telus Spark Science Centre",
  description: "Telus Spark offers amazing exhibits like 'Body Worlds Vital', movies at the Dome Theatre and Adults Only nights. Twist your experience in Vancouver with a tast of Science! Seasonal exhibits and events listed on website.",
  image_url: 'https://images.prismic.io/telusspark/df3da90f-8518-4aa2-860d-ec3e296e7ede_TELUS+SPARK_Building.jpg?auto=compress,format&rect=0,126,2808,1474&w=1200&h=630',
  city: 'Vancouver',
  address: '12 Expo Avenue, Vancouver, 4B8 1C9',
  price_per_person: 46,
  max_number_of_participants: 25,
  date: "05/01/2021",
})

Activity.create!({
  title:  "Vancouver Food Tour",
  description: "We are here to provide first class hospitality and tender loving care of our guests while sharing our passion for the world’s best food producers, markets, artisans, chefs and restaurants in a fun manner whether we are guiding someone on a walking tour in our home base of Vancouver, BC or leading an adventure to the world’s most fascinating culinary destinations.",
  image_url: 'https://assets.simpleviewinc.com/simpleview/image/upload/crm/vancouverbc/Gastronomic-Gastown-Tour---Six-Acres-2_80BDB59B-3E2F-4EB7-8A746C30C0E53DB6_ea21920b-e45d-4681-9d2707814823d065.jpg',
  city: 'North Vancouver',
  address: '11 Bilam Stree, North Vancouver, 9C8 1X8',
  price_per_person: 78,
  max_number_of_participants: 12,
  date: "09/08/2021",
})

Activity.create!({
  title:  "Jubilee Auditorium",
  description: "The Jubilee offers amazing events and spectacular shows throughout the year including the Opera, the BC Ballet, concerts and the Philharmonic Orchestra. Many shows are available at the Jubilee Auditorium. Guests can easily commute to the Jubilee with a 5 minute walk to the waterfront C-train and a 2 minute train ride right to the auditorium.",
  image_url: 'https://static1.squarespace.com/static/5a4c8f0c12abd9756b9bc6da/5a4cbf250d929722a0ea2646/5a5c12e071c10bca1334e577/1515984094306/SAJA.png?format=1500w',
  city: 'North Vancouver',
  address: '10 Capilano Avenue, North Vancouver, 2k8 1B8',
  price_per_person: 89,
  max_number_of_participants: 6,
  date: "03/04/2021",
})

Activity.create!({
  title:  "Jack Singer Hall & Arts",
  description: "Come and see an orchestrated evening with the Vancouver Philharmonic Orchestra, special guests, concerts and the theatre! See the website for more information about special shows, the orchestra and dining options at Arts Commons, located in the heart of downtown at Olympic Plaza.",
  image_url: 'https://www.ticketcity.com/cdn-cgi/image/quality=70,format=auto,fit=cover,gravity=center/imglib/concert/51/66382/default.jpg',
  city: 'Vancouver',
  address: '19 Georgia Street, Vancouver, 9V7 1X8',
  price_per_person: 66,
  max_number_of_participants: 14,
  date: "12/14/2020",
})

Activity.create!({
  title:  "Glenbow Museum",
  description: "Glenbow showcases world-renowned travelling and permanent exhibitions that are meaningful to many diverse groups in our community, boasts the largest art collection in Western Canada and provides access and care to our collections. Various showcases and exhibits run through the museum; see website for updated events.",
  image_url: 'https://s3-ca-central-1.amazonaws.com/glenbow-media-library/glenbow/corporate-website/current/wp-content/uploads/2020/07/27145356/Glenbow-FirstThursday-May2-69-1-1200x800.jpg',
  city: 'Delta',
  address: '5454 Aspen Street, Delta, 2M9 6G7',
  price_per_person: 26,
  max_number_of_participants: 12,
  date: "06/07/2021",
})

Activity.create!({
  title:  "Fort Squamish",
  description: "When the NWMP built their fort at the confluence of the Bow and Elbow Rivers in 1875, they laid the foundations for the city we enjoy today. Fort Squamish is located just north of downtown Vancouver on a 40-acre site. Open year-round, the Fort offers Vancouverites and their guests fun, interactive exhibits, and tours.",
  image_url: 'https://westhantshistoricalsociety.ca/wp-content/uploads/2014/05/fort-edward-and-cannon-1-e1562293016970-1024x576.jpg',
  city: 'Squamish',
  address: '1 Leona Road, Squamish, 3W6 Y7M',
  price_per_person: 19,
  max_number_of_participants: 25,
  date: "06/09/2020",
})

Activity.create!({
  title:  "Archery",
  description: "Archery has been practised for hundreds of years and there’s something extra special about drawing your bow and shooting an arrow. A noble and ancient sport, it’s a great and gentle family activity that all ages can enjoy together. You’ll receive expert tuition and guidance, ensuring your arrows are on target. Each person shoots 30 arrows and the activity lasts from 40 to 50 minutes.",
  image_url: 'https://contents.mediadecathlon.com/p1730340/k$4d9a0ca51bc17902fc53fa69fd6792e6/discovery-junior-kids-archery-bow-red.jpg?&f=452x452',
  city: 'Squamish',
  address: '4 Maquama Road, Squamish, 1B9 4B8',
  price_per_person: 45,
  max_number_of_participants: 30,
  date: "10/10/2020",
})

Activity.create!({
  title:  "Falconry",
  description: "Offering you the chance to enjoy magnificent wildlife and ancient woodlands, falconry is an unmissable part of the Squamish Experience. One of our guests most-loved pursuits, you’ll get up close and personal with mesmerising falcons, hawks and owls in the Squamish grounds.Our Falconry School can facilitate guests’ requirements and experiences can be tailored to meet your needs, with activity duration around 1 hour and 15 minutes.",
  image_url: 'https://www.offthegridnews.com/wp-content/uploads/2014/04/falconry-400x225.jpg',
  city: 'Squamish',
  address: '12 Garibaldi Way, Squamish, 7C0 9M9',
  price_per_person: 35,
  max_number_of_participants: 40,
  date: "11/12/2020",
})

Activity.create!({
  title:  "Family Fun Cooking Class",
  description: "The objective of this class is to provide a fun 3 hour class to families of up to 4 people with at least 2 children in the group.",
  image_url: 'https://cdn.biltmorehotel.com/assets/img/hotel/kids-cooking-classes.jpg',
  city: 'Squamish',
  address: '245 Main Street, North Vancouver, 2X8 T3E',
  price_per_person: 35,
  max_number_of_participants: 16,
  date: "11/12/2020",
})

Activity.create!({
  title:  "Snowmobiling",
  description: "Take the ride of your life on a Whistler Outside snowmobile tour. Close to Whistler , the Fall Creek snow base is the gateway to seldom traveled backcountry with unmatched riding opportunities and scenery. The trails traverse glades, forests and park land between some of the highest peaks in the west, with soaring views of the Wilson Range, Dolores peaks, Little Cone, the Sneffels Range and the Mountains of western BC.",
  image_url: 'https://previews.123rf.com/images/kobeza/kobeza1611/kobeza161100010/65076710-man-driving-snowmobile-in-snowyfield-in-a-sunny-day-lapland-finland-.jpg',
  city: 'Whistler',
  address: '467 Nesters Road, Whistler, 8X8 3M4',
  price_per_person: 75,
  max_number_of_participants: 18,
  date: "02/02/2021",
})

Activity.create!({
  title:  "Snowshoeing",
  description: "There is no better way to experience the serene winter beauty of the West Coast Mountains than with a pair of snowshoes strapped to your feet. You will frolic in fresh BC powder while learning about Whistler’s unique natural history from expert guides. Take a hike for a few hours, a full day or a multi-day hut trip! ",
  image_url: 'https://www.rei.com/dam/_snowshoeing_hero_lg.jpg',
  city: 'Whistler',
  address: '4545 Whistler Way, Whistler, 4m8 1B9',
  price_per_person: 120,
  max_number_of_participants: 20,
  date: "01/01/2020",
})

Activity.create!({
  title:  "Via Ferrata",
  description: " The Whistler's Via Ferrata is a thrilling technical hike (not for the faint hearted) along the east end of the Whistlercanyon, offering spectacular views of Bridal Veil Falls and the Whistler Valley. This is a unique adventure and our guide service supplies you with knowledgeable guides and top of the line equipment for this unique adventure. If you want a new and exciting trip, this offering is for you.",
  image_url: 'https://www.explore-mag.com/media/image/68780_max.jpg',
  city: 'Whistler',
  address: '10 Olmpic Plaza, Whistler, 9B7 1M9',
  price_per_person: 89,
  max_number_of_participants:16,
  date: "07/07/2020",
})
## BOOKINGS
Booking.destroy_all

al.bookings.create!({
  activity_id: act1.id,
  number_of_participants: 2,
  price_per_person: 10
})

al.bookings.create!({
  activity_id: act3.id,
  number_of_participants: 5,
  price_per_person: 27
})

al.bookings.create!({
  activity_id: act2.id,
  number_of_participants: 3,
  price_per_person: 85
})

## FAVORITES
Favorite.destroy_all

al.favorites.create!(activity_id: act2.id)

al.favorites.create!(activity_id: act1.id)

al.favorites.create!(activity_id: act3.id)
