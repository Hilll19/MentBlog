import React from 'react'
import styles from './comments.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Comments = () => {

    const status = "authenticated"
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Comments</h1>
            {status === "authenticated" ? (
            <div className={styles.write}>
                <textarea placeholder="Write a comment..." className={styles.input}></textarea>
                <button className={styles.button}>Send</button>
            </div>
            ) : (
            <Link href="/login">Login to write</Link>
            )}
            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src="/p1.jpeg" alt='' width={50} height={50} className={styles.image} />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>01.01.2024</span>
                        </div>
                    </div>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse unde dicta dolor delectus, quis harum facere corrupti, veritatis veniam officia, recusandae quo! Nihil ad eos impedit dolore consequuntur, suscipit cum!
                    </p>
                </div>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src="/p1.jpeg" alt='' width={50} height={50} className={styles.image} />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>01.01.2024</span>
                        </div>
                    </div>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere laborum, dicta fugit cum adipisci vero repudiandae voluptatibus beatae nobis in iusto rerum culpa sint tenetur quasi enim tempore neque. Optio.
                    </p>
                </div>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src="/p1.jpeg" alt='' width={50} height={50} className={styles.image} />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>01.01.2024</span>
                        </div>
                    </div>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis velit quasi enim, ipsum culpa, laudantium ea necessitatibus ipsa reiciendis vero sint, doloremque eius? Inventore, magni iure quis assumenda commodi facilis.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Comments