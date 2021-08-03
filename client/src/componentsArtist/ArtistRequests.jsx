import React from "react";
import FilterBar from "./FilterBar.jsx"
import DashboardUneditable from "./DashboardUneditable.jsx"

const requests = [
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
    artist_id: 1,
    category_id: 1,
  },
  {
    id: 1,
    name: "guitar",
    image: "https://cdn.mos.cms.futurecdn.net/Ge25ccbyKQ76Et9bBjFnxk-1024-80.jpg.webp",
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
    id: 1,
    name: "paint",
    image: "https://images.glaciermedia.ca/polopoly_fs/1.24212567.1601479674!/fileImage/httpImage/image.jpg_gen/derivatives/landscape_804/kamloops-art-page-2.jpg",
    description: "urgent request",
    start_date: "2021-01-01",
    expected_finish_date: "2021-02-01",
    actual_finish_date: null,
    price: 40,
    client_id: 1,
    artist_id: 1,
    category_id: 1,
  },
]

export default function Dashboard(props) {
  function acceptRequest(value, key, index) {
    // axios.post("/artist_request", requests)
  }


  const dashboard = requests.map((request, index) => {
    return (
      <DashboardUneditable 
        request = {request}
        index = {index}
        acceptRequest = {acceptRequest}
      />
    )
  })

  return (
    <main>
      {dashboard}
    </main>
  )
}