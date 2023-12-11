import Link from 'next/link'
import React from 'react'
import styles from './menuCategories.module.css'

const MenuCategories = () => {
    return (
        <div className={styles.categoryList}>
            <Link href="/blog?cat=anxiety" className={`${styles.categoryItem} ${styles.anxiety}`}>Anxiety</Link>
            <Link href="/blog?cat=depression" className={`${styles.categoryItem} ${styles.depression}`}>Depression</Link>
            <Link href="/blog?cat=selfcare" className={`${styles.categoryItem} ${styles.selfcare}`}>Self-Care</Link>
            <Link href="/blog?cat=mentality" className={`${styles.categoryItem} ${styles.mentality}`}>mentality</Link>
            <Link href="/blog?cat=trauma" className={`${styles.categoryItem} ${styles.trauma}`}>Trauma & Healing </Link>
            <Link href="/blog?cat=bullying" className={`${styles.categoryItem} ${styles.bullying}`}>Bullying</Link>
        </div>
    )
}

export default MenuCategories