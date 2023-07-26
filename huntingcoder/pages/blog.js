import React from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'
export default function blog() {
  return (
    <div className={styles.main}>
    <div className={styles.blogs}>
    <h2>Popular Blogs</h2>
    <div className="blogitem">
    <Link href={'/blogpost/learn-javascript-mind'}>
      <h3>Learn JS in 2023?</h3></Link>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  </div> 
    <div className="blogs">
    <h2>Popular Blogs</h2>
    <div className="blogitem">
      <h3>Learn JS in 2023?</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  </div> 
    </div> 
)}
