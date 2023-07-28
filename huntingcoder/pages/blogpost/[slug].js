import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/blogpost.module.css'

export default function slug(props) {

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

export async function getServerSideProps(context) {
  // console.log(context.query)
  // // const router = useRouter()
  const { slug } = (context.query)
  let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  let myBlog = await data.json()
  return {
    props: { myBlog }
  }

}