import React from 'react'
import styles from './categoryList.module.css'
import Link from 'next/link'
import Image from 'next/image'
Image

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {/* Container category */}
        <Link href="/blog?cat=anxiety" className={`${styles.category} ${styles.anxiety}`}>
          <Image src="/style.png" alt='' width={32} height={32} className={styles.image} />
          Anxiety
        </Link>
        {/* Travel */}
        <Link href="/blog?cat=depression" className={`${styles.category} ${styles.depression}`}>
          <Image src="/travel.png" alt='' width={32} height={32} className={styles.image} />
          Depresion
        </Link>
        <Link href="/blog?cat=selfcare" className={`${styles.category} ${styles.selfcare}`}>
          <Image src="/culture.png" alt='' width={32} height={32} className={styles.image} />
          Self-Care
        </Link>
        <Link href="/blog?cat=mentality" className={`${styles.category} ${styles.mentality}`}>
          <Image src="/style.png" alt='' width={32} height={32} className={styles.image} />
          Mentality
        </Link>
        <Link href="/blog?cat=trauma" className={`${styles.category} ${styles.trauma}`}>
          <Image src="/food.png" alt='' width={32} height={32} className={styles.image} />
          Trauma & Healing
        </Link>
        <Link href="/blog?cat=bullying" className={`${styles.category} ${styles.bullying}`}>
          <Image src="/fashion.png" alt='' width={32} height={32} className={styles.image} />
          bullying
        </Link>
      </div>
    </div>
  )
}

export default CategoryList