import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import indexStyle from '../styles/index.module.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function Home() {

  const[users, setUsers] = useState([])

    
    useEffect(()=>{

      const fetchData = async () => {
        try {
          const reponce = await axios.get('https://jsonplaceholder.typicode.com/users')
          console.log(reponce.data)
          setUsers(reponce.data)
          
        } catch (error) {
          console.log(error);
        }
      }
      
      fetchData()

    },[])
  

  return (
    <div className='text-center'>
       
      <h1 className='text-center'>Static Rendering</h1>
      <h3 className='text-center'>{users.length}</h3> 
      {users.map((userData, i)=>{
            return <p key={i}>{i + 1} : {userData.username}</p>
      })}
      </div>
  )
}
