import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function DefaultLayut(props) {
  return (
    <div>
       {/* <Header/> */}
        {props.children}
      {/* <Footer/> */}
    </div>
  )
}
