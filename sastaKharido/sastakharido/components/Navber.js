import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineShoppingCart } from 'react-icons/ai';

export default function Navber() {
  return (
    <div className='flex  flex-col md:flex-row md:justify-start   justify-center items-center  my-2 shadow-md'>
     <div className='logo mx-6 mb-2'>
      <Link href={'/'}>
        <Image src='/logo.png' alt='logo' height={100} width={180}/>
      </Link>
     </div>
       <div className="nav">
        <ul className='flex items-center space-x-5 '>
            <Link  href={'/tshirts'}><li>Tshirts</li></Link>
            <Link href={'/hoodies'}><li>Hoodies</li></Link>
            <Link href={'/stickers'}><li>Stickers</li></Link>
            <Link href={'/mugs'}><li>Mugs</li></Link>
        </ul>
       </div>
       <div className="cart absolute right-5 ">
        <AiOutlineShoppingCart className='text-xl md:text-3xl cursor-pointer'/> 
       </div>
    </div>
  )
}
