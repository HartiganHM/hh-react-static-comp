import React from 'react';
import Button from './Button';
import './Banner.css';

const Banner = () => {
  return (
    <div className='Banner'>
      <div className='banner-left'>
        <h2>Expand your mind and escape to an <span>alternate</span> reality</h2>
        <p>Keep track of all the books you've read and, most importantly, keep yourself honest for everything that you want to read.</p>
        <div className='button-holder'>
          <Button buttonType='dark'
                  buttonText='Get started' />
          <Button buttonType='light'
                  buttonText='Learn more' />
        </div>
      </div>
      <div className='banner-right'></div>
    </div>
  )
}

export default Banner;
