import Layout from '../components/layout'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/main.scss';


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
// teste
export default MyApp
