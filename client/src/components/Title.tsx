import React from 'react';
import '../styles/title.scss'

export const Title = (props: {text:string}):React.ReactElement => {
  return(
    <div className='title-container'>
      <span className='title'>{props.text}</span>
    </div>
    
  )
}