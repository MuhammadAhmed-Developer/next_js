import { useEffect, useState } from 'react'
import '../styles/globals.css'
import Navber from '../components/Navber'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {

  const [cart, setcart] = useState({})
  const [subTotal, setsubTotal] = useState(0)

  useEffect(() => {
    try {
      
    } catch (error) {
      
    }
   if(localStorage.getItem("cart")){
     setcart(JSON.parse(localStorage.getItem("cart")))
   }else{

   }
  }, [])
  


  const saveCart = (myCart) =>{
    localStorage.setItem('Cart', myCart )
  }

  const addToCart = (itemCode, qty, price, name, size, variant) => {
     let newCart = cart
     if(itemCode in cart){
       newCart[itemCode].qty = cart[itemCode] + qty  //already add quantity increased
     }else{
      newCart[itemCode] = {qty: 1, price, name, size, variant} //new item add
     }
     setcart(newCart)
     saveCart(newCart)
  }


  const removeToCart = (itemCode, qty, price, name, size, variant) => {
     let newCart = cart
     if(itemCode in cart){
       newCart[itemCode].qty = cart[itemCode] - qty  //already add quantity increased
     }
     if(newCart[itemCode]["qty"]<=0){
       delete newCart[itemCode]
     }
     setcart(newCart)
     saveCart(newCart)
  }


  const clearCart = () =>{
    setcart({})
    saveCart({})
  }

  return <>
  <Navber/>
  <Component {...pageProps} />
  <Footer/>
  </>
}

export default MyApp
