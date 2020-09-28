import React from "react"
import { BrowserRouter as Router, Link} from "react-router-dom"

function Activity(props){
  return (
    <div className='activity'>
      <div className='activity-img'>
        <img src={props.item.image_url}/>
      </div>
      <div className='activity-title'>
        {props.item.title}
      </div>
      <div className='activity-link'>
        <Link to={`/activities/${props.item.id}`}>more details</Link>
      </div>
      <div className='activity-spot'>
       spots remaining:{props.item.max_number_of_participants}
      </div>
    </div>
  )
}

export default Activity