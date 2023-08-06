import '../styles/globals.css'
import Navber from '../components/Navber'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return <>
  <Navber/>
  <Component {...pageProps} />
  <Footer/>
  </>
}

export default MyApp
