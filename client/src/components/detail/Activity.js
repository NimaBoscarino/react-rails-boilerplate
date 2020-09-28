import React,{useState, useEffect} from 'react'
import axios from 'axios'


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
     <h1>{activity.title}</h1>
     <h2>When:{activity.date}</h2>
     <div>{activity.description}</div>
     <div>spots remaining:{activity.max_number_of_participants}</div>
     <img src={activity.image_url}></img>
   </div>
  )
}

export default Activity