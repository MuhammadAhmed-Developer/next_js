import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function DefualtLayout(props) {
  return (
    <>
     <Header/>

     <main className='main'>
      {props.children}
     </main>

     <Footer/>
    </>
  )
}
