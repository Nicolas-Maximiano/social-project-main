import '../styles/globals.scss'
import 'swiper/scss'
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import 'react-toastify/dist/ReactToastify.css'

import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    //create auth privider
    <>
      <Component {...pageProps} />

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

export default MyApp
