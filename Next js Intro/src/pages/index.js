import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'


export default function Home() {

  const router = useRouter()
  const userId = 0
  const userName = 'Ahmed'
  return (
    <>
    {/* <Header/> */}
    <div>
       <main className='main'>
         <h1>Index pages</h1>
         
         <Link href='/users' className='text-center'>User</Link>
         <br/>
         <Link href='/services'>Services</Link>
         <br/>
         <button onClick={()=>{router.push('/users')}}>Navigate to Users</button>
         <br/>
         <button onClick={()=>{router.push('/services')}}>Navigate to Services</button>
         <br/>
         <button onClick={()=>{router.push(`/users/${userId}/${userName}`)}}>Navigate to Userid 1 ANd name john</button>
       </main>
    </div>
    </>
  )
}
