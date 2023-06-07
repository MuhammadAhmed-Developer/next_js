import DefaultLayut from "../../Components/DefaultLayout";
import '@/styles/globals.css';
import Head from 'next/head';


export default function App({ Component, pageProps }) {
  return <DefaultLayut>
    <Head>
      {/* Bootstrap CSS */}
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"></link>
      <title>Next Layouts</title>
      {/* Bootstrap Javascript */}
      
    </Head>
    <Component {...pageProps} />
  </DefaultLayut>
}
