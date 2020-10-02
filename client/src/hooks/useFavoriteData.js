import {useState, useEffect} from "react";
import axios from 'axios';

export default function useBookingData() {
	const [state, setState] = useState({
    favorites: [],
    favoredActivities: []
  })

  useEffect(() => {
    Promise.all([
      Promise.resolve(axios.get('/api/users/1/favorites')),
      Promise.resolve(axios.get('/api/activities/user/1/favored'))
    ])
    .then(all => {
      // console.log(all)
      setState({
        favorites: all[0].data, 
        favoredActivities: all[1].data
      })
    })
    .catch(err => console.log("useFavoriteData.js err: ", err))
	}, [])
	

  function cancelFavorite(favoriteId) {
		return Promise.all([
      Promise.resolve(axios.delete(`/api/users/1/favorites/${favoriteId}`)),
			Promise.resolve(axios.get('/api/users/1/favorites')),
			Promise.resolve(axios.get('/api/activities/user/1/favored'))
		]).then(all => 
				setState(pre => ({
					favorites: all[1].data,
					favoredActivities: all[2].data
				})
			))
			.catch(err => console.log(err))
  }
	return {state, cancelFavorite}
}