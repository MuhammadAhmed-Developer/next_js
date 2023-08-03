import Head from 'next/head'
import Navber from '../components/Navber'
import Footer from '../components/Footer'

export default function Home() {
  return (
        <>
      <Head>
        <title>Sasta Kharido</title>
        <meta name="description" content="SastaKharido.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navber/>  
      <img src="/headerimg.jpg"/>
      <Footer/>
    </>
  )
}
