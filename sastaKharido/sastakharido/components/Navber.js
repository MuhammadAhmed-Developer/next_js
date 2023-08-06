import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillCloseCircle, AiOutlineShoppingCart } from 'react-icons/ai';

export default function Navber() {
  // const ref = useRef()
  const ref = useRef(null);
  
const toggleCart = () => {
  if (ref.current.classList.contains('translate-x-full')) {
    ref.current.classList.remove('translate-x-full');
    ref.current.classList.add('translate-x-0');
  } else {
    ref.current.classList.remove('translate-x-0');
    ref.current.classList.add('translate-x-full');
  }
}


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
       <div className="cart absolute right-5 " onClick={toggleCart} >
        <AiOutlineShoppingCart  className='text-xl md:text-3xl cursor-pointer text-green-500'/> 
       </div>

      <div ref={ref} className="sideCart absolute right-0 top-0 bg-green-100 p-10 transform transition-transform translate-x-full">
           <h2 className='font-bold text-xl'>Shopping Cart</h2>
           <span onClick={toggleCart} className='absolute top-3 right-4 text-2xl cursor-pointer text-green-500'><AiFillCloseCircle/></span>
           <ol>
            <li><span>T-Shirt </span></li>
           </ol>
      </div>

    </div>
  )
}
