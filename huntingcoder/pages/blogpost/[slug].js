import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/blogpost.module.css'

export default function slug() {


    const router = useRouter()
    const {slug} = (router.query)

  return (
    <div className={styles.container}>

    <div className={styles.main}>
        <h1>This is Page Title {slug}</h1>
        <hr />
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta unde neque perspiciatis et officiis tempore saepe cumque necessitatibus dignissimos possimus,  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptates dolorum nesciunt explicabo rem quos voluptas molestias quae, sunt repellendus non esse perferendis maiores harum sed numquam autem eum labore.
        </div>
    </div>
    </div>
  )
}
