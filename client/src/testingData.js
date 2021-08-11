const requests_for_test = [
  {
    id: 1,
    name: "Golden Guitar",
    image:
      "https://cdn.mos.cms.futurecdn.net/Ge25ccbyKQ76Et9bBjFnxk-1024-80.jpg.webp",
    description: "made by maple wood",
    start_date: null,
    expected_finish_date: "2021-08-31",
    actual_finish_date: null,
    price: 20,
    client_id: 1,
    artist_id: null,
    category_id: 1,
  },
  {
    id: 2,
    name: "guitar",
    image:
      "https://cdn.mos.cms.futurecdn.net/Ge25ccbyKQ76Et9bBjFnxk-1024-80.jpg.webp",
    description: "made by maple wood",
    start_date: "2021-01-01",
    expected_finish_date: "2021-02-01",
    actual_finish_date: "2021-03-01",
    price: 30,
    client_id: 1,
    artist_id: 1,
    category_id: 1,
  },
  {
    id: 3,
    name: "paint",
    image:
      "https://images.glaciermedia.ca/polopoly_fs/1.24212567.1601479674!/fileImage/httpImage/image.jpg_gen/derivatives/landscape_804/kamloops-art-page-2.jpg",
    description: "urgent request",
    start_date: null,
    expected_finish_date: "2021-02-01",
    actual_finish_date: null,
    price: 40,
    client_id: 2,
    artist_id: null,
    category_id: 2,
  },
  {
    id: 4,
    name: "guitar",
    image:
      "https://cdn.mos.cms.futurecdn.net/Ge25ccbyKQ76Et9bBjFnxk-1024-80.jpg.webp",
    description: "made by maple wood",
    start_date: "2021-01-01",
    expected_finish_date: "2021-02-01",
    actual_finish_date: null,
    price: 30,
    client_id: 1,
    artist_id: 1,
    category_id: 1,
  },
  {
    id: 5,
    name: "guitar",
    image:
      "https://cdn.mos.cms.futurecdn.net/Ge25ccbyKQ76Et9bBjFnxk-1024-80.jpg.webp",
    description: "made by maple wood",
    start_date: null,
    expected_finish_date: "2021-02-01",
    actual_finish_date: null,
    price: 30,
    client_id: 1,
    artist_id: 1,
    category_id: 1,
  },
  {
    id: 6,
    name: "guitar",
    image:
      "https://cdn.mos.cms.futurecdn.net/Ge25ccbyKQ76Et9bBjFnxk-1024-80.jpg.webp",
    description: "made by maple wood",
    start_date: null,
    expected_finish_date: "2021-02-01",
    actual_finish_date: null,
    price: 30,
    client_id: 1,
    artist_id: 1,
    category_id: 1,
  },


  // finished work for show
  {
    id: 7,
    name: "guitar",
    image:
      "https://www.takamine.com/templates/default/images/g90.png",
    description: "made by maple wood",
    start_date: "2021-01-01",
    expected_finish_date: "2021-02-01",
    actual_finish_date: "2021-03-01",
    price: 30,
    client_id: 1,
    artist_id: 1,
    category_id: 1,
  },
  {
    id: 8,
    name: "guitar",
    image:
      "https://online.berklee.edu/takenote/wp-content/uploads/2020/07/learn_acoustic_blues_guitar_article_image.jpg",
    description: "made by maple wood",
    start_date: "2021-01-01",
    expected_finish_date: "2021-02-01",
    actual_finish_date: "2021-03-01",
    price: 30,
    client_id: 1,
    artist_id: 1,
    category_id: 1,
  },
  {
    id: 9,
    name: "guitar",
    image:
      "https://ewww.music-lessons.ca/wp-content/uploads/2012/04/Acoustic-Guitar.jpeg?strip=all&lossy=1&quality=90&ssl=1",
    description: "made by maple wood",
    start_date: "2021-01-01",
    expected_finish_date: "2021-02-01",
    actual_finish_date: "2021-03-01",
    price: 30,
    client_id: 1,
    artist_id: 1,
    category_id: 1,
  },
  {
    id: 10,
    name: "guitar",
    image:
      "https://cdn.shopify.com/s/files/1/3098/9898/products/esp-v-50-blk-ltd-electric-guitar-black-item-type-solid-body-guitars-manufacturer-on-sale-price-250-499-fleet-pro-sound_279_1024x1024@2x.jpg?v=1606346733",
    description: "made by maple wood",
    start_date: "2021-01-01",
    expected_finish_date: "2021-02-01",
    actual_finish_date: "2021-03-01",
    price: 30,
    client_id: 1,
    artist_id: 1,
    category_id: 1,
  },
  {
    id: 10,
    name: "guitar",
    image:
      "https://cdn.shopify.com/s/files/1/3098/9898/products/esp-v-50-blk-ltd-electric-guitar-black-item-type-solid-body-guitars-manufacturer-on-sale-price-250-499-fleet-pro-sound_279_1024x1024@2x.jpg?v=1606346733",
    description: "made by maple wood",
    start_date: "2021-01-01",
    expected_finish_date: "2021-02-01",
    actual_finish_date: "2021-03-01",
    price: 30,
    client_id: 1,
    artist_id: 1,
    category_id: 1,
  },
  {
    id: 10,
    name: "guitar",
    image:
      "https://www.pictureframesexpress.co.uk/blog/wp-content/uploads/2020/05/7-Tips-to-Finding-Art-Inspiration-Header-1024x649.jpg",
    description: "made by maple wood",
    start_date: "2021-01-01",
    expected_finish_date: "2021-02-01",
    actual_finish_date: "2021-03-01",
    price: 30,
    client_id: 1,
    artist_id: 3,
    category_id: 1,
  },
  {
    id: 10,
    name: "guitar",
    image:
      "https://www.metmuseum.org/-/media/images/art/collection-landing-page/collection-highlights/fragment-queen.jpg?as=1&la=en&mh=848&mw=1344&hash=792C7AC097CDFD3D161801517B047CBF",
    description: "made by maple wood",
    start_date: "2021-01-01",
    expected_finish_date: "2021-02-01",
    actual_finish_date: "2021-03-01",
    price: 30,
    client_id: 1,
    artist_id: 4,
    category_id: 1,
  },
  {
    id: 10,
    name: "guitar",
    image:
      "https://www.metmuseum.org/-/media/images/art/collection-landing-page/collection-highlights/van-gogh-wheat-field.jpg?as=1&la=en&mh=848&mw=1344&hash=CDC12A417D2D038073999806466015CB",
    description: "made by maple wood",
    start_date: "2021-01-01",
    expected_finish_date: "2021-02-01",
    actual_finish_date: "2021-03-01",
    price: 30,
    client_id: 1,
    artist_id: 3,
    category_id: 1,
  },
];

const artists_for_test = [
  {
    id: 1,
    name: "Lun",
    email: "Lun@gmail.com",
    password: 12345,
    contact: "604-729-0794",
  },
  {
    id: 2,
    name: "Ji",
    email: "Ji@gmail.com",
    password: 12345,
    contact: "604-222-2222",
  },
  {
    id: 3,
    name: "Adam",
    email: "Adam@gmail.com",
    password: 12345,
    contact: "604-333-3333",
  },
  {
    id: 4,
    name: "Senay",
    email: "Senay@gmail.com",
    password: 12345,
    contact: "604-444-4444",
  },
];

const users_for_test = [
  {
    id: 1,
    name: "Lun",
    email: "Lun@gmail.com",
    password: 12345,
    contact: "604-729-0794",
  },
  {
    id: 2,
    name: "Ji",
    email: "Ji@gmail.com",
    password: 12345,
    contact: "604-323-0451",
  },
  {
    id: 3,
    name: "client3",
    email: "test3@gmail.com",
    password: 12345,
    contact: "778-124-1946",
  },
  {
    id: 4,
    name: "client4",
    email: "test4@gmail.com",
    password: 12345,
    contact: "225-151-7747",
  },
];

const categories_for_test = [
  {
    id: 1,
    name: "Guitar",
  },
  {
    id: 2,
    name: "Art",
  },
  {
    id: 3,
    name: "HandyCraft"
  }
];

module.exports = {
  requests_for_test,
  artists_for_test,
  users_for_test,
  categories_for_test,
};
