import React from 'react'
import styles from './slugPage.module.css'
import Menu from '@/components/Menu/Menu'
import Image from 'next/image'
import Comments from '@/components/comments/Comments'

const SinglePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ratione.</h1>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                            <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
                        </div>
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>01.01.2024</span>
                        </div>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description}>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis illo labore reprehenderit et voluptates voluptate aliquam doloremque aspernatur dolor ut esse nisi iusto nulla, provident eum, quidem quibusdam nihil eius!</p>
                        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, unde!</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis illo labore reprehenderit et voluptates voluptate aliquam doloremque aspernatur dolor ut esse nisi iusto nulla, provident eum, quidem quibusdam nihil eius!</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis illo labore reprehenderit et voluptates voluptate aliquam doloremque aspernatur dolor ut esse nisi iusto nulla, provident eum, quidem quibusdam nihil eius!</p>
                    </div>
                    <div className={styles.comment}>
                        <Comments/>
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    )
}

export default SinglePage