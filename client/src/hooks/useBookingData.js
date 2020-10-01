import {useState, useEffect} from "react";
import axios from 'axios';

export default function useBookingData() {
	const [state, setState] = useState({
    bookings: [],
    bookedActivities: []
  })

  useEffect(() => {
    Promise.all([
      Promise.resolve(axios.get('/api/users/1/bookings')),
      Promise.resolve(axios.get('/api/activities/user/1/booked'))
    ])
    .then(all => {
      // console.log(all)
      setState({
        bookings: all[0].data, 
        bookedActivities: all[1].data
      })
    })
    .catch(err => console.log("bookings.js err: ", err))
	}, [])
	

  function cancelBooking(bookingId) {
		return Promise.all([
      Promise.resolve(axios.delete(`/api/users/1/bookings/${bookingId}`)),
			Promise.resolve(axios.get('/api/users/1/bookings')),
			Promise.resolve(axios.get('/api/activities/user/1/booked'))
		]).then(all => 
				setState(pre => ({
					bookings: all[1].data,
					bookedActivities: all[2].data
				})
			))
			.catch(err => console.log(err))
  }
	return {state, cancelBooking}
}