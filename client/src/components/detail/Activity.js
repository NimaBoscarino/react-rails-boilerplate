import React,{useState, useEffect} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Badge } from 'reactstrap';

function Activity(props){
  const [activity, SetActivity]= useState({})

  useEffect(()=>{
    const id = props.match.params.id;
    const url = `/api/activities/${id}`
    console.log(props)
    axios.get(url)
    .then(res=>SetActivity(res.data))
    .catch(res=>console.log(res))

  },[])
  console.log(activity)
  return(
  <div>
   <div>
     <h1>{activity.title}</h1>
     <h4>{activity.date}</h4>
     <div>{activity.description}</div>
     <img src={activity.image_url} alt={activity.title}></img>
     <div>
       spots remaining:  <Badge color='info'>{activity.max_number_of_participants}</Badge>
     </div>
     <div>price:${activity.price_per_person}</div>
   </div>
   <Button color='success'>Join this activity</Button>
   <Button color='warning'>Add to favs</Button>
  </div>
  )
}

export default Activity