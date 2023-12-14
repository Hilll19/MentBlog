"use client"
import React, { useState } from 'react';
import styles from './authLinks.module.css';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

const AuthLinks = () => {

  const [open, setOpen] = useState(false);
  //temporary check status
  // const { status } = useSession();
  const { status } = useSession();

  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/Login" className={styles.link}>Login</Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>Write</Link>
          <span className={styles.link} onClick={signOut}>Logout</span>
        </>
      )}
      <div className={styles.burger} onClick={()=> setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/"> Homepage</Link>
          <Link href="/"> About</Link>
          <Link href="/"> Contact</Link>
          {status === "unauthenticated" ? (
            <Link href="/Login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className={styles.link} onClick={signOut}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
