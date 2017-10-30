import React from 'react';
import Button from './Button';
import Author from './Author.js';
import './Story.css';

const Story = (props) => {
  return (
    <div className='Story'>
      <div>
        <img className='storyImage' src={props.img} />
      </div>
      <div className='story-info'>
        <div>
          <h3>{props.title}</h3>
          <p>{props.desc}</p>
        </div>
        <Author authImg= {props.authImg}
                authName= {props.authName}
                estTime= {props.estTime}/>
      </div>
    </div>
  )
}

export default Story;
