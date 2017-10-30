import React, { Component } from 'react';
import Header from './Header';
import Banner from './Banner';
import Stories from './Stories';
import Footer from './Footer';
import './App.css';

const stories = [
  {
    img: './public/book12.jpg',
    title: 'All the Light We Cannot See',
    desc: 'or, Why you should care about typography',
    authImg: './public/author12.jpg',
    authName: 'Anothony Doerr',
    estTime: '8 day'
  },
  {
    img: './public/book11.jpg',
    title: 'The Fellowship of the Ring',
    desc: 'Examining villains in modern storytelling',
    authImg: './public/author11.jpg',
    authName: 'JRR Tolkien',
    estTime: '7 day'
  },
  {
    img: './public/book10.jpg',
    title: 'The Martian',
    desc: 'Those who say otherwise just aren\'t trying hard enough.',
    authImg: './public/author10.png',
    authName: 'Andy Weir',
    estTime: '8 day'
  },
  {
    img: './public/book9.jpg',
    title: 'The Invisible Man',
    desc: 'Everybody knows fart jokes are hilarious ...',
    authImg: './public/author9.jpeg',
    authName: 'HG Wells',
    estTime: '5 day'
  }
]

const haveRead = [
  {
    img: './public/book8.jpg',
    title: 'House of Leaves',
    desc: 'This is not for you...',
    authImg: './public/author8.jpg',
    authName: 'Mark Z Danielewski',
    estTime: '12 day'
  },
  {
    img: './public/book7.jpg',
    title: 'The Reducetarian Solution',
    desc: 'You don\'t need to be vegan, just eat smarter',
    authImg: './public/author7.jpg',
    authName: 'Brian Kateman',
    estTime: '4 day'
  },
  {
    img: './public/book6.jpg',
    title: 'Catch 22',
    desc: 'Bombs, planes, but, most importantly, continuing the war',
    authImg: './public/author6.jpg',
    authName: 'Joseph Heller',
    estTime: '7 day'
  },
  {
    img: './public/book5.jpg',
    title: 'The Immortal Life of Henrietta Lacks',
    desc: 'How one woman\'s death changed the face of medicine',
    authImg: './public/author5.jpg',
    authName: 'Rebecca Skloot',
    estTime: '4 day'
  },
  {
    img: './public/book4.jpg',
    title: 'On Highway 61',
    desc: 'From Louis Armstrong to Bob Dylan',
    authImg: './public/author4.jpg',
    authName: 'Dennis McNally',
    estTime: '10 day'
  },
  {
    img: './public/book3.jpg',
    title: 'The Hitchhiker\'s Guid to the Galaxy',
    desc: 'Don\'t Panic!',
    authImg: './public/author3.jpg',
    authName: 'Douglas Adams',
    estTime: '5 day'
  },
  {
    img: './public/book2.jpg',
    title: 'The Hitchhiker\'s Guid to the Galaxy',
    desc: 'Don\'t Panic!',
    authImg: './public/author2.jpg',
    authName: 'Cormac McCarthy',
    estTime: '3 day'
  },
  {
    img: './public/book1.jpg',
    title: 'Miss Peregrine\'s Home for Peculiar Children',
    desc: 'A darker, twisted version of Harry Potter',
    authImg: './public/author1.jpg',
    authName: 'Ransom Riggs',
    estTime: '6 day'
  }
]

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Banner />
      <Stories  storiesTitle="Wish List to Read this Year"
                stories={stories} />
      <Stories  storiesTitle="Completed this Year"
                stories={haveRead} />
      <Footer />
    </div>
  );
}

export default App;
