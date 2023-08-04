import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navber() {
  return (
    <div className='flex  flex-col md:flex-row md:justify-start   justify-center items-center'>
     <div className='logo mx-6 mb-2'>
        <Image src='/logo.png' alt='logo' height={500} width={200}/>
     </div>
       <div className="nav">
        <ul className='flex items-center space-x-5 font-bold'>
            <Link  href={'/'}><li>Tshirts</li></Link>
            <Link href={'/'}><li>Hoodies</li></Link>
            <Link href={'/'}><li>Stickers</li></Link>
            <Link href={'/'}><li>Mugs</li></Link>
        </ul>
       </div>
       <div className="cart absolute right-5 top-2">
        <button>Cart</button>
       </div>
    </div>
  )
}
