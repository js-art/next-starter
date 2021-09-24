import '../styles/globals.scss'
import Layout from '@/ly/Layout'
function MyApp({ Component, pageProps,router }) {
  return <Layout Component={Component} pageProps={pageProps} router={router} />
}

export default MyApp
