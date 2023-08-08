import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillCloseCircle, AiFillMinusSquare, AiFillPlusSquare, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs';

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

       {/* Toggle Cart============================= */}

      <div ref={ref} className="sidebar h-full  w-72 sideCart absolute right-0 top-0 bg-green-100 p-10 transform transition-transform translate-x-full">
           <h2 className='font-bold text-xl text-center'>Shopping Cart</h2>
           <span onClick={toggleCart} className='absolute top-3 right-4 text-2xl cursor-pointer text-green-500'><AiFillCloseCircle/></span>
           <ol className='list-decimal'>
            <li>
              <div className="item flex my-5">
              <div className='w-3/5 '> T-Shirt Lorem ipsum </div>
          
                <div className=' flex items-center justify-center'><AiFillPlusSquare className='cursor-pointer mx-2 text-2xl  text-green-400'/><span className='text-2xl mb-1'>3</span>  <AiFillMinusSquare className='cursor-pointer mx-2 text-2xl text-red-400'/></div>
              </div>
            </li>
            <li>
              <div className="item flex my-5">
              <div className='w-3/5 '> T-Shirt Lorem ipsum </div>
          
                <div className=' flex items-center justify-center'><AiFillPlusSquare className='cursor-pointer mx-2 text-2xl  text-green-400'/><span className='text-2xl mb-1'>3</span>  <AiFillMinusSquare className='cursor-pointer mx-2 text-2xl text-red-400'/></div>
              </div>
            </li>
          </ol>
          <div className="flex">
          <button className="flex text-white bg-green-500 border-0 py-3 px-3 focus:outline-none hover:bg-green-600 rounded text-sm"><BsFillBagCheckFill className='mx-1 mt-'/> CheckOut</button>
          <button className="mx-2  text-white bg-green-500 border-0 py-2 px-3 focus:outline-none hover:bg-green-600 rounded text-sm">Clear Cart</button>
          </div>
      </div>

    </div>
  )
}
