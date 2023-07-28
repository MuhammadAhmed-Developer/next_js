import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/blogpost.module.css'
import * as fs from 'fs';

export default function Slug(props) {

  const [blog, setblog] = useState(props.myBlog)

  // const router = useRouter()
  // useEffect(() => {
  //   if (!router.isReady) return
  //   const {slug} = (router.query)

  //   fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a) => {
  //     return a.json();
  //   })
  //   .then((parsed) => {
  //     setblog(parsed)
  //   })
  // }, [router.isReady])


  return (
    <div className={styles.container}>

      <div className={styles.main}>
        <h1>{blog && blog.title}</h1>
        <hr />
        <div className='blog-content'>
          {blog && blog.content}
        </div>
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
  return {
    paths: [
      {params : {slug: 'learn-flask'}},
      {params : {slug: 'learn-js'}},
      {params : {slug: 'learn-nextjs'}},
    ],
    fallback: true, // false or "blocking"
  };
} 


export async function getStaticProps(context) {
  console.log(context)
  // // const router = useRouter()
  const { slug } = (context.params)


 let myBlog = await fs.promises.readFile(`blogsData/${slug}.json`, 'utf-8')

  return {
    props: { myBlog: JSON.parse(myBlog) }
  }

}



// export async function getServerSideProps(context) {
//   // console.log(context.query)
//   // // const router = useRouter()
//   const { slug } = (context.query)
//   let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
//   let myBlog = await data.json()
//   return {
//     props: { myBlog }
//   }

// }