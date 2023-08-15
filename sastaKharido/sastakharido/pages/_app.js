import { useEffect, useState } from 'react'
import '../styles/globals.css'
import Navber from '../components/Navber'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {

  const [cart, setcart] = useState({})
  const [subTotal, setsubTotal] = useState(0)

  useEffect(() => {
    try {
      if(localStorage.getItem("cart")){
        setcart(JSON.parse(localStorage.getItem("cart")))
        saveCart(JSON.parse(localStorage.getItem("cart")) )
      }      
    } catch (error) {
      console.error(error)  
      localStorage.clear()
    }
   
  }, [])
  


  const saveCart = (myCart) =>{
    localStorage.setItem("cart", JSON.stringify(myCart) )
    let subt = 0
    let keys = Object.keys(myCart)
    for (let i = 0; i< keys.length; i++) {
     console.log(keys);
      subt += myCart[keys[i]]["price" ]* myCart[keys[i]].qty
      
    }
    setsubTotal(subt)
  }

  const addToCart = (itemCode, qty, price, name, size, variant) => {
     let newCart = cart
     if(itemCode in cart){
       newCart[itemCode].qty = cart[itemCode].qty + 1  //already add quantity increased
     }else{
      newCart[itemCode] = {qty: 1, price, name, size, variant} //new item add
     }
     setcart(newCart)
     console.log(newCart);
     saveCart(newCart)
  }


  const removeToCart = (itemCode, qty, price, name, size, variant) => {
     let newCart =JSON.parse(JSON.stringify(cart))
     if(itemCode in cart){
       newCart[itemCode].qty = cart[itemCode].qty - qty  //already add quantity increased
     }
     console.log(itemCode);
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
  <Navber key={subTotal} cart={cart} addToCart={addToCart} removeToCart={removeToCart} clearCart={clearCart} subTotal={subTotal}/>
  <Component cart={cart} addToCart={addToCart} removeToCart={removeToCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
  <Footer/>
  </>
}

export default MyApp
