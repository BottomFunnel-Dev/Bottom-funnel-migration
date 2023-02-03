import '../styles/globals.css'
import "slick-carousel/slick/slick.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { SSRProvider } from 'react-bootstrap';

import { store } from '../redux/store';
import { Provider } from 'react-redux';
export default function App({ Component, pageProps }) {
  return <SSRProvider store={store}>
    <Component {...pageProps} />
  </SSRProvider>
}
  