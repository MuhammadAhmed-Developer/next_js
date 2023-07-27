import React, { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'
export default function blog() {
 
  const [blogs, setblogs] = useState([])

  useEffect(() => {
    console.log('Working');
    fetch('http://localhost:3000/api/blogs').then((a) => {
      return a.json();
    })
    .then((parsed) => {
      
      console.log(parsed);
      setblogs(parsed)
    })
  }, [])
  return (
    <div className={styles.main}>
        <h2>Popular Blogs</h2>
        {blogs.map((blogitem)=>{
          return  <div className={styles.blogs}>
        
          <div className="blogitem">
            <Link href={'/blogpost/learn-javascript-mind'}>
              <h3>Auther : {blogitem.author}</h3>
              <h3>{blogitem.title}</h3></Link>
            <p>{blogitem.content}</p>
          </div>
        </div>
        })}
    </div>
  )
}
