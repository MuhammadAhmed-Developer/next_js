import '@/styles/globals.css'
import DefualtLayout from '../../Components/DefualtLayout'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default function App({ Component, pageProps }) {
  return <DefualtLayout>
    <Component {...pageProps} />
  </DefualtLayout>
}
