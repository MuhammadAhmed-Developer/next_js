import axios from 'axios'
import React, { useState } from 'react'

export default function ssr({users}) {
  console.log(users)



  return (
    <div className='text-center'>
      <h1>Next SSR (server side Rendering)</h1>
      {users.map((user, i)=>{
        return <p key={i}>{i+1}: {user.name} </p>
      })}
    </div>
  )
}


export async function getStaticProps() {


    try {
      const reponce = await axios.get('https://jsonplaceholder.typicode.com/users')
      console.log(reponce.data)
      return {
        props: {
          users: reponce.data
        },
      }
      
    } catch (error) {
      console.log(error); 
    }
  }
 
  
  
