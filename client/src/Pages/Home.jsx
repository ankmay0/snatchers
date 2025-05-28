import React from 'react';
import Navbar from '../components/Navbar.jsx'
import Crausel from '../components/Crausel/Crausel.jsx';
import DateNight from '../components/DateNight.jsx';
import Category from '../components/Category';
import NewProducts from '../components/NewProducts';
import Testimonial from '../components/Testimonial';
import Blog from '../components/Blog';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Crausel />
      <DateNight />
      <Category />
      <NewProducts />
      <Testimonial />
      <Blog />
    </>
  );
};

export default Home;
