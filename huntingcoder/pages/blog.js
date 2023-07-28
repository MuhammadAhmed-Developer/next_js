import React, { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'
export default function blog(props) {
  console.log(props);
  const [blogs, setblogs] = useState(props.allBlogs)

  // useEffect(() => {
  //   fetch('http://localhost:3000/api/blogs').then((a) => {
  //     return a.json();
  //   })
  //   .then((parsed) => {
  //     setblogs(parsed)
  //   })
  // }, [])
  return (
    <div className={styles.main}>
        <h2>Popular Blogs</h2>
        {blogs.map((blogitem,i)=>{
          return  <div key={i} className={styles.blogs}>
        
          <div className="blogitem">
            <Link href={`/blogpost/${blogitem.slug}`}>
              <h3>Auther : {blogitem.author}</h3>
              <h3>{blogitem.title}</h3></Link>
            <p>{blogitem.content.substr(0, 200)}...</p>
          </div>
        </div>
        })}
    </div>
  )
}

export async function getServerSideProps(context){
 let data = await fetch('http://localhost:3000/api/blogs')
 let allBlogs = await data.json()
 
 return{
  props:{allBlogs},
 }

}