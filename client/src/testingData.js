const requests_for_test = [
  {
    id: 1,
    name: "guitar",
    image: "https://cdn.mos.cms.futurecdn.net/Ge25ccbyKQ76Et9bBjFnxk-1024-80.jpg.webp",
    description: "made by maple wood",
    start_date: "2021-01-01",
    expected_finish_date: "2021-02-01",
    actual_finish_date: null,
    price: 20,
    client_id: 1,
    artist_id: null,
    category_id: 1,
  },
  {
    id: 2,
    name: "guitar",
    image: "https://cdn.mos.cms.futurecdn.net/Ge25ccbyKQ76Et9bBjFnxk-1024-80.jpg.webp",
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
    image: "https://images.glaciermedia.ca/polopoly_fs/1.24212567.1601479674!/fileImage/httpImage/image.jpg_gen/derivatives/landscape_804/kamloops-art-page-2.jpg",
    description: "urgent request",
    start_date: "2021-01-01",
    expected_finish_date: "2021-02-01",
    actual_finish_date: null,
    price: 40,
    client_id: 2,
    artist_id: 2,
    category_id: 2,
  },
]

const artists_for_test = [
  {
    id: 1,
    name: "Lun",
    email: "Lun@gmail.com",
    password: 12345,
    contact: 12345,
  },
  {
    id: 2,
    name: "Ji",
    email: "Ji@gmail.com",
    password: 12345,
    contact: 12345,
  },
]

const users_for_test = [
  {
    id: 1,
    name: "Lun",
    email: "Lun@gmail.com",
    password: 12345,
    contact: 12345,
  },
  {
    id: 2,
    name: "Ji",
    email: "Ji@gmail.com",
    password: 12345,
    contact: 12345,
  },
]

const categories_for_test = [
  {
    id: 1,
    name: "Guitar"
  },
  {
    id: 2,
    name: "Art"
  },
]

module.exports = {requests_for_test, artists_for_test, users_for_test, categories_for_test}