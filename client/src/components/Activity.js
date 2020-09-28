import React from "react"

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
        <a href={`/activities/${props.item.id}`}>more details</a>
      </div>
      <div className='activity-spot'>
       spots remaining:{props.item.max_number_of_participants}
      </div>
    </div>
  )
}

export default Activity