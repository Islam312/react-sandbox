import React from 'react';

import classes from './navbar.module.css';

export const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <a href = "/" className={classes.item}>Profile</a>
      <a href = "/" className={classes.item}>Message</a>
      <a href = "/" className={classes.item}>Posts</a>
       <a href = "/" className={classes.item}>News</a>
    </nav>
  );
};
