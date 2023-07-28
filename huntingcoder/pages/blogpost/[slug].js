import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/blogpost.module.css'

export default function slug() {

  const [blog, setblog] = useState()

  const router = useRouter()
  useEffect(() => {
    if (!router.isReady) return
    const {slug} = (router.query)

    fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a) => {
      return a.json();
    })
    .then((parsed) => {
      setblog(parsed)
    })
  }, [router.isReady])


  return (
    <div className={styles.container}>

    <div className={styles.main}>
        <h1>{blog && blog.title}</h1>
        <hr />
        <div>
         {blog && blog.content}
        </div>
    </div>
    </div>
  )
}
