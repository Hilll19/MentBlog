import React from 'react'
import styles from './featured.module.css'
const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Welcome to MentBlog!</b> 
        Discover my stories and creatives ideas
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}></div>
        <div className={styles.textContainer}></div>
      </div>
    </div>
  )
}

export default Featured