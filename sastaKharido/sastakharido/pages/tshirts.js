import Link from 'next/link'
import React from 'react'
import Product from "../models/Product"
import mongoose from "mongoose";

export default function Tsirts({products}) {
  return (
    <div>
        
  <section className="text-gray-600 body-font">
  <div className="container px-6 py-24 mx-auto ">
    <div className="flex flex-wrap -m-4 flex justify-center ">
      {products.map((item)=>{
       return <Link passHref={true} key={item._id} href={`/product/${item.slug}`} className="lg:w-1/4 md:w-1/2 p-4 w-full hover:shadow-lg my-8  ">
        <Link href={`/product/${item.slug}`} className="block relative h-2/3  sm:w-3/6 md:w-11/12 rounded overflow-hidden m-auto">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block sm:m-auto" src={item.img}/>
        </Link>
        <div className="mt-4 sm:text-center md:text-left">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">T-Shirts</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">{item.tittle}</h2>
          <p className="mt-1">${item.price}</p>
          <p className="mt-1">Xl, M, S</p>
        </div>
      </Link>
       })}
      
    </div>
  </div>
</section>

    </div>
  )
}

export const getServerSideProps = async (context) => {

  if(!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGO_URI)
  }
  let products = await Product.find({category: "tshirt"})
  return { 
    props: {products:JSON.parse(JSON.stringify(products)) } 
  }
}