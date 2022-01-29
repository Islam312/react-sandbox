import React from 'react';

import classes from './userProfile.module.css';
export const UserProfile = () => {
  return (
    <div className={`${classes.userProfile} d-flex`}>
      <img
        src="https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg"
        alt="user profile"
      />
      <div className={`${classes.userInfo} d-flex`}>
        <span>John</span>
        <span>Date of Birth: 06.12.1997</span>
        <span>City: Bishkek</span>
        <span>Edication: KTMU</span>
        <span>Web Site: --</span>
      </div>
    </div>
  );
};
