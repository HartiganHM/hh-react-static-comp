import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='Header'>
      <a className='writeStory' href='#'>Add a book</a>
      <h1>Page Turner</h1>
      <a href='#'>Sign In/Sign Up</a>
    </div>
  )
}

export default Header;
