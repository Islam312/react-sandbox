import React from 'react';
import Posts from '../posts';
import UserProfile from '../userProfile';

import classes from './content.module.css';

export const Content = () => {
  return (
    <main className={classes.content}>
      <UserProfile />
      <Posts />
    </main>
  );
};
