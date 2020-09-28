import React,{useState, useEffect} from 'react'


function Activity(props){
  const [activity, SetActivity]= useState({})

  useEffect(()=>{
    const id = props.match.params.id;
    const url = `/api/activities/${id}`
    console.log(props)

  },[])
  return(
    <h1>hello hahahahhhah</h1>
  )
}

export default Activity