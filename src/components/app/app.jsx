import React from 'react';
import Content from '../content';

import Header from '../header';
import Navbar from '../navbar';

import './app.css';

export const App = () => {
  return (
    <div className="appWrapper">
      <Header />
      <Navbar />
      <Content />
    </div>
  );
};
