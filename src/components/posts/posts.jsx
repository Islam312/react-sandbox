import React from 'react';

import classes from './posts.module.css';

export const Posts = () => {
  return (
    <div>
      <h3 className={classes.baseHeader}>Posts</h3>
      <div>
        <form>
        <input type="text" className='form-control' placeholder='New Post'/>
        <input type="submit" value='Submit' className='baseBtn'/>
        </form>
      </div>
      <div className={classes.postWrapper}>
        <div className={classes.item}>
          <div className={classes.title}> #1 my first post test</div>
          <div className={classes.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            numquam tenetur vel itaque sit quisquam inventore doloribus beatae
            natus neque!
          </div>
          <hr/>

        </div>
      </div>
    </div>
  );
};
