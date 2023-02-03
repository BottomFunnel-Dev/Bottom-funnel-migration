import '../styles/globals.css'
import "slick-carousel/slick/slick.css";
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';

import SSRProvider from 'react-bootstrap/SSRProvider';
export default function App({ Component, pageProps }) {

  useEffect(() => {
    import ('bootstrap/dist/js/bootstrap.js')
}, []);




  return <SSRProvider>
    <Component {...pageProps} />
  </SSRProvider>
}
  