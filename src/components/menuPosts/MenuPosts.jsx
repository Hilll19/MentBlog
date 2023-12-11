import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './menuPosts.module.css'

const MenuPosts = ({ withImage }) => {
    return (
        <div className={styles.items}>
            <Link href="/" className={styles.item}>
                {withImage && (<div className={styles.imageContainer}>
                    <Image src="/p1.jpeg" alt='' width={120} height={120} className={styles.image} />
                </div>)}
                <div className={styles.imageContainer}>
                    <span className={`${styles.category} ${styles.anxiety}`}>Anxiety</span>
                    <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
                    <div className={styles.detail}>
                        <span className={styles.username}>Alexander</span>
                        <span className={styles.date}>10.03.2023</span>
                    </div>
                </div>
            </Link>
            <Link href="/" className={styles.item}>
                {withImage && <div className={styles.imageContainer}>
                    <Image src="/p1.jpeg" alt='' width={120} height={120} className={styles.image} />
                </div>}
                <div className={styles.imageContainer}>
                    <span className={`${styles.category} ${styles.depression}`}>Depression</span>
                    <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
                    <div className={styles.detail}>
                        <span className={styles.username}>Alexander</span>
                        <span className={styles.date}>10.03.2023</span>
                    </div>
                </div>
            </Link>
            <Link href="/" className={styles.item}>
                {withImage && <div className={styles.imageContainer}>
                    <Image src="/p1.jpeg" alt='' width={120} height={120} className={styles.image} />
                </div>}
                <div className={styles.imageContainer}>
                    <span className={`${styles.category} ${styles.selfcare}`}>Self-Care</span>
                    <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
                    <div className={styles.detail}>
                        <span className={styles.username}>Alexander</span>
                        <span className={styles.date}>10.03.2023</span>
                    </div>
                </div>
            </Link>
            <Link href="/" className={styles.item}>
                {withImage && <div className={styles.imageContainer}>
                    <Image src="/p1.jpeg" alt='' width={120} height={120} className={styles.image} />
                </div>}
                <div className={styles.imageContainer}>
                    <span className={`${styles.category} ${styles.mentality}`}>Mentality</span>
                    <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
                    <div className={styles.detail}>
                        <span className={styles.username}>Alexander</span>
                        <span className={styles.date}>10.03.2023</span>
                    </div>
                </div>
            </Link>
            <Link href="/" className={styles.item}>
                {withImage && <div className={styles.imageContainer}>
                    <Image src="/p1.jpeg" alt='' width={120} height={120} className={styles.image} />
                </div>}
                <div className={styles.imageContainer}>
                    <span className={`${styles.category} ${styles.trauma}`}>Trauma & Healing</span>
                    <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
                    <div className={styles.detail}>
                        <span className={styles.username}>Alexander</span>
                        <span className={styles.date}>10.03.2023</span>
                    </div>
                </div>
            </Link>
            {/* <Link href="/" className={styles.item}>
                {withImage && (
                    <div className={styles.imageContainer}>
                        <Image src="/p1.jpeg" alt='' width={120} height={120} className={styles.image} />
                    </div>
                )}
                <div className={styles.imageContainer}>
                    <span className={`${styles.category} ${styles.bullying}`}>Bullying</span>
                    <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
                    <div className={styles.detail}>
                        <span className={styles.username}>Alexander</span>
                        <span className={styles.date}>10.03.2023</span>
                    </div>
                </div>
            </Link> */}
        </div>

        // <div className={styles.items}>
        //     <Link href="/" className={styles.item}>

        //       <div className={styles.imageContainer}>
        //         <span className={`${styles.category} ${styles.anxiety}`}>Anxiety</span>
        //         <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
        //         <div className={styles.detail}>
        //           <span className={styles.username}>Alexander</span>
        //           <span className={styles.date}>10.03.2023</span>
        //         </div>
        //       </div>
        //     </Link>
        //     <Link href="/" className={styles.item}>

        //       <div className={styles.imageContainer}>
        //         <span className={`${styles.category} ${styles.depression}`}>Depression</span>
        //         <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
        //         <div className={styles.detail}>
        //           <span className={styles.username}>Alexander</span>
        //           <span className={styles.date}>10.03.2023</span>
        //         </div>
        //       </div>
        //     </Link>        
        //     <Link href="/" className={styles.item}>

        //       <div className={styles.imageContainer}>
        //         <span className={`${styles.category} ${styles.trauma}`}>Trauma & Healing</span>
        //         <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
        //         <div className={styles.detail}>
        //           <span className={styles.username}>Alexander</span>
        //           <span className={styles.date}>10.03.2023</span>
        //         </div>
        //       </div>
        //     </Link>
        //     <Link href="/" className={styles.item}>

        //       <div className={styles.imageContainer}>
        //         <span className={`${styles.category} ${styles.bullying}`}>Bullying</span>
        //         <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
        //         <div className={styles.detail}>
        //           <span className={styles.username}>Alexander</span>
        //           <span className={styles.date}>10.03.2023</span>
        //         </div>
        //       </div>
        //     </Link>
        //   </div>

    )
}

export default MenuPosts