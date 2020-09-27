# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Activity.destroy_all


Activity.create!({
  title:  'Wild Whales Vancouver',
  description: 'Wild Whales Vancouver is situated on Granville Island, a 5-10 minute taxi ride from most downtown hotels. The 50 bus will drop you off at the entrance to the Island or Granville Island Ferries and Aquabus will shuttle you across from various departure points along the seawall directly to Granville Island.',
  image_url: 'https://img.grouponcdn.com/pwa_test/2dVewtoksTr3YQJb58g33yRckrtJ/2d-669x446/v1/c700x420.jpg',
  city: 'Vancouver',
  address: '1806 Mast Tower Road, Vancouver, 5H8 1B9',
  price_per_person: 160,
  max_number_of_participants: 15,
  date: "11/10/2020",
})

Activity.create!({
  title:  'TAG Whistler',
  description: 'The Adventure Group is Whistler’s premier year-round activity operator representing the BEST of Whistler! Only moments from Whistler Village our team offers summer adventures including Whitewater Rafting, RZR Tours, Biking and Jet-Boating. Fly the world\'s most spectacular ziplines in Canada with Superfly Ziplines and swing from the trees in our Treetop Adventure course.',
  image_url: 'https://s3.amazonaws.com/lmpm-wordpress-media-store-prod/wp-content/uploads/sites/2/2019/11/whistler-ziplining-summer2.jpg',
  city: 'Whistler',
  address: '211-4293 Mountain Square, Whistler, 9V0 1B8',
  price_per_person: 60,
  max_number_of_participants: 6,
  date: "11/11/2020",
})

Activity.create!({
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
  title:  'The College of Piping and Celtic Performing Arts of Canada',
  description: "Celtic culture comes alive at The College of Piping & Celtic Performing Arts of Canada! The College has developed a world-class reputation as an international school of excellence in Highland bagpiping, Scottish-style drumming, Highland dancing and Island step dancing.",
  image_url: 'https://collegeofpiping.com/wp-content/uploads/2019/07/carrousel_3.png',
  city: 'North Vancouver',
  address: '45 Marine Drive, Vancouver, 5BU 4F6',
  price_per_person: 12,
  max_number_of_participants: 15,
  date: "04/05/2021",
})

Activity.create!({
  title:  'Eptek Art & Culture Centre',
  description: "Eptek Art & Culture Centre offers regional and Prince Edward Island exhibits year round. Showcases include themes ranging from history to art, including periodic displays of the permanent collection of paintings by the late Dr. Georgie Read Barton. Plan a visit to the Eptek Art & Culture Centre to sample the rich culture that Islanders and visitors alike find intriguing.",
  image_url: 'https://lh3.googleusercontent.com/proxy/Lp6-_KzY3H3p7ndMK3L3a-xfpeBnWWKNwPtAu1Izgi0qIuHq1wS1E7e0igTiSTPMw_NS3n5J0DgOepLzuVMR8O1HR-VjF9wrLMBa2Xrq9IZi4OKnyQKauD06JaEeu7B4QPYriT3I',
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