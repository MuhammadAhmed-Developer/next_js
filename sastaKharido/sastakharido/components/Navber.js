import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineShoppingCart } from 'react-icons/ai';

export default function Navber() {
  return (
    <div className='flex  flex-col md:flex-row md:justify-start   justify-center items-center py-1'>
     <div className='logo mx-6 mb-2'>
        <Image src='/logo.png' alt='logo' height={100} width={180}/>
     </div>
       <div className="nav">
        <ul className='flex items-center space-x-5 font-bold'>
            <Link  href={'/'}><li>Tshirts</li></Link>
            <Link href={'/'}><li>Hoodies</li></Link>
            <Link href={'/'}><li>Stickers</li></Link>
            <Link href={'/'}><li>Mugs</li></Link>
        </ul>
       </div>
       <div className="cart absolute right-5 ">
        <AiOutlineShoppingCart className='text-xl md:text-3xl cursor-pointer'/> 
       </div>
    </div>
  )
}
