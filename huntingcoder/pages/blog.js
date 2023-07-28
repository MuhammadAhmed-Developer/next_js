import React, { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link';
import * as fs from 'fs';

export default function Blog(props) {
  // console.log(props);
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
        {blogs?.map((blogitem)=>{
          return  <div key={blogitem.slug} className={styles.blogs}>
        
          <div className="blogitem">
            <Link href={`/blogpost/${blogitem.slug}`}>
              <h3>Auther : {blogitem.author}</h3>
              <h3>{blogitem.title}</h3></Link>
            <p>{blogitem.metadesc.substr(0, 200)}...</p>
          </div>
        </div>
        })}
    </div>
  )
}




export async function getStaticProps(context){
  let data = await  fs.promises.readdir('blogsData')
  let myfile;
 let allBlogs =[]

    for (let index = 0; index < data.length; index++) {
      const item = data[index];
      // console.log(item)
      myfile =  await fs.promises.readFile(('blogsData/' +  item), "utf-8" )
      // console.log(myfile)  
      allBlogs.push(JSON.parse(myfile))}

   return{
  props:{allBlogs}
 }

}
// export async function getServerSideProps(context){
//  let data = await fetch('http://localhost:3000/api/blogs')
//  let allBlogs = await data.json()
 
//  return{
//   props:{allBlogs},
//  }

// }