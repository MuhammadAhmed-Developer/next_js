import Link from 'next/link'
import React from 'react'
import { AiFillCloseCircle, AiFillMinusSquare, AiFillPlusSquare } from 'react-icons/ai'
import { BsFillBagCheckFill } from 'react-icons/bs'

export default function Checkout({cart, clearCart, removeToCart, addToCart, subTotal}) { 
  return (
    <div className='container mx-10'>
      <h1 className='font-bold text-3xl text-center'>CheckOut</h1>
      <h1 className='text-xl mx-16'>1. Delivery Details</h1>
      <div className='mx-16 flex '>
        <div className='px-2 w-1/2'>
          <div className="mb-4">
            <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className='px-2 w-1/2'>
          <div className=" mb-4">
            <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
      </div>
      <div className='px-2 mx-16'>
        <div class="mb-4">
          <label for="message" class="leading-7 text-sm text-gray-600">Address</label>
          <textarea id="address" name="address" cols='10' rows='5' class="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" spellcheck="false" data-ms-editor="true"></textarea>
        </div>

      </div>
      <div className='mx-16 flex '>
        <div className='px-2 w-1/2'>
          <div className="mb-4">
            <label for="phone" className="leading-7 text-sm text-gray-600">phone</label>
            <input type="phone" id="phone" name="phone" class="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className='px-2 w-1/2'>
          <div className=" mb-4">
            <label for="city" className="leading-7 text-sm text-gray-600">city</label>
            <input type="text" id="city" name="city" class="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
      </div>
      <div className='mx-16 flex '>
        <div className='px-2 w-1/2'>
          <div className="mb-4">
            <label for="state" className="leading-7 text-sm text-gray-600">state</label>
            <input type="text" id="state" name="state" class="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className='px-2 w-1/2'>
          <div className=" mb-4">
            <label for="pincode" className="leading-7 text-sm text-gray-600">pinCode</label>
            <input type="number" id="pincode" name="pincode" class="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
      </div>
      <h1 className='text-xl mx-16'>2. Review Cart Items & Pay</h1>

      <div  className="sidebar  sideCart  bg-green-100 p-10 mx-7">
        <h2 className='font-bold text-xl text-center'>Shopping Cart</h2>

        <ol className='list-decimal'>
          {Object.keys(cart).length==0 && <div className='my-5'>Your Cart is Empty!</div>}
          {Object.keys(cart).map((k) => {return <li key={k}>
              <div className="item flex my-5">
                <div className='w-3/5 '> {cart[k].name}</div>

                <div className=' flex items-center justify-center'><AiFillPlusSquare onClick={()=>{addToCart(k , 1, cart[k].price , cart[k].name, cart[k].size, cart[k].variant )}} className='cursor-pointer mx-2 text-2xl  text-green-400' /><span className='text-2xl mb-1'>{cart[k].qty}</span>  <AiFillMinusSquare onClick={()=>{removeToCart(k , 1, cart[k].price , cart[k].name, cart[k].size, cart[k].variant )}} className='cursor-pointer mx-2 text-2xl text-red-400' /></div>
              </div>
            </li>
          })} 

        </ol>
        <div className="flex">
          <Link href={'/checkout'}><button className="flex text-white bg-green-500 border-0 py-2 px-2 focus:outline-none hover:bg-green-600 rounded text-sx"><BsFillBagCheckFill className='mx-1 mt-' /> CheckOut</button></Link>
          <button onClick={clearCart} className="mx-2  text-white bg-green-500 border-0 py-2 px-2 focus:outline-none hover:bg-green-600 rounded text-xs">Clear Cart</button> 
        </div>
        <br/>
        <span className='mt-5'>SubTotal: {subTotal}$</span>
      </div>
        <button className="mx-8 mt-3 text-lg  text-white bg-green-500 border-0 py-2 px-4 focus:outline-none hover:bg-green-600 rounded ">Pay  {subTotal} $</button> 

    </div>
  )
}
