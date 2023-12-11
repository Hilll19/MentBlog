import React from 'react'
import styles from './menu.module.css'
import Link from 'next/link'
import MenuPosts from '../menuPosts/MenuPosts'
import Image from 'next/image'
import MenuCategories from '../menuCategories/MenuCategories'

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot topic "}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts withImage={false} />
      {/* Sidemenu 2 */}
      <h2 className={styles.subtitle}>{"Discoverd by Topic"}</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories/>
      <h2 className={styles.subtitle}>{"Choosen by Editor"}</h2>
      <h1 className={styles.title}>Editors Pick</h1>
      <MenuPosts withImage={true} />
    </div>
  )
}

export default Menu