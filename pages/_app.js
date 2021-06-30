import Layout from '../components/layout'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/main.scss';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify"; // Importamos o Toastify

function MyApp({ Component, pageProps }) {
  return (

    <Layout>
      <ToastContainer autoClose={5000} />
      <Component {...pageProps} />
    </Layout>
  )
}
// teste
export default MyApp
