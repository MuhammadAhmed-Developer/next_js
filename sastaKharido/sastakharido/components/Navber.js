import React from 'react'
import Image from 'next/image'

export default function Navber() {
  return (
    <div className='flex justify-between'>
     <div className='logo'>
        <Image src='/logo.png' alt='logo' height={500} width={200}/>
     </div>
       <div className="nav">
        <ul className='flex'>
            <li>Tshirts</li>
            <li>Hoodies</li>
            <li>Stickers</li>
            <li>Mugs</li>
        </ul>
       </div>
    </div>
  )
}
