import React from 'react'
import axios from 'axios'

export default function ssrWithParameter({post}) {
    console.log(post)

    

  return (
    <div className='text-center'>
        <h1>SSRWithParameter (server side props)</h1>
        <p>{post.body}</p>
    </div>
  )
}


export async function getServerSideProps(context) {


  try {
    const reponce = await axios.get(`https://jsonplaceholder.typicode.com/posts/${context.query.id}`)
    console.log(reponce.data)
    return {
      props: {
        post : reponce.data
      },
    }
    
  } catch (error) {
    console.log(error); 
  }
}
