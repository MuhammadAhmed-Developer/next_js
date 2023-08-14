import React from 'react'

export default function Order() {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
    <div className="container px-5 py-24 mx-auto">
      <div className="lg:w-4/5 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
          <h2 className="text-sm title-font text-gray-500 tracking-widest">Kharido.com</h2>
          <h1 className="text-gray-900 text-xl title-font font-medium mb-4">Order Id: 1256720</h1>
          <p className="leading-relaxed mb-4">Your Order has been successfully Placed</p>
          <div class="flex mb-4">
          <a class="flex-grow text-greem-500  py-2 text-lg px-1">Item Description</a>
          <a class="flex-grow  py-2 mx-12 text-lg px-1">Quantity</a>
          <a class="flex-grow  py-2 ml-16 text-lg  px-1">Price</a>
        </div>
          <div className="flex border-t border-gray-200 py-2">
            <span className="text-gray-500">T-Shirt Xl</span>
            <span className="ml-auto text-gray-900">1</span>
            <span className="ml-auto text-gray-900">$ 89</span>
          </div>
          <div className="flex border-t border-gray-200 py-2">
            <span className="text-gray-500">T-Shirt M</span>
            <span className="ml-auto text-gray-900">1</span>
            <span className="ml-auto text-gray-900">$ 99</span>
          </div>
          <div className="flex border-t  border-gray-200 py-2">
            <span className="text-gray-500">T-Shirt M</span>
            <span className="ml-auto text-gray-900">1</span>
            <span className="ml-auto text-gray-900">$ 99</span>
          </div>
         
          <div className="flex mt-2">
            <span className="title-font font-medium text-2xl text-gray-900">SubTotal: $58.00</span>
            <button className="flex ml-auto text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">Track Order</button>
           
          </div>
        </div>
        <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400"/>
      </div>
    </div>
  </section>
  )
}
