import React, {useContext} from "react";
import {stateContext} from '../helpers/stateProvider.jsx';

export default function Comment(props) {
  const {data , setData} = useContext(stateContext);
  // console.log('Data in Comments', data)
  console.log('Comments' ,data.commentsApi)
 const comments = data.commentsApi.map((comment) => {
return  ( <ul>
     <li>{comment.id}</li>
     <li>{comment.title}</li>
     <li>{comment.content}</li>
   </ul>)
 })
  return(
    <div>
    {comments}
    
    </div>
  )
}