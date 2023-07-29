import React from 'react'
import styles from '../styles/About.module.css'
import Head from 'next/head'
export default function About() {
  return (
    <div className={styles.box}>
      <Head>
        <title>About page</title>
      </Head>
      <h1 className={styles.h1}>About Hunting Coder</h1>
       <h2>Introduction</h2>
       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore quis est dicta excepturi cum numquam quasi, enim nostrum aperiam doloremque sit ipsa, quos animi quas obcaecati commodi nihil soluta laboriosam neque optio laborum architecto sed facere nemo. Voluptate necessitatibus fuga velit accusamus cupiditate maiores qui quos quam placeat earum nemo quia vero porro, asperiores quo in voluptas? Repellendus molestias quisquam fuga qui! Aliquid quos laboriosam libero assumenda omnis veritatis, facere iure maiores enim illo cumque culpa consequatur vero fugit natus optio nostrum aliquam. Et aperiam ipsum non iste accusamus, esse laboriosam provident tempora, expedita numquam cupiditate, quas odio veniam temporibus?</p>
       <h2>Services Offered</h2>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis inventore vitae, ipsum quibusdam nihil consequuntur voluptates sunt veniam explicabo cum error impedit autem ab accusamus quasi nisi voluptatem esse iure
        <br/> 
        <br/> 
       <b>We offer the following Services</b> 
        <ul>
          <li>Service 1</li>
          <li>Service 1</li>
          <li>Service 1</li>
          <li>Service 1</li>
          <li>Service 1</li>
          <li>Service 1</li>
        </ul>
       </p>
       <h2>Contact US</h2>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos accusantium ex adipisci similique minima quasi quod sapiente impedit fugiat, provident totam corrupti architecto repudiandae praesentium unde tempore eveniet distinctio quia?</p>
    </div>
  )
}
