import '../styles/globals.css'
import "slick-carousel/slick/slick.css";
import { store } from '../redux/store';
import { Provider } from 'react-redux';
export default function App({ Component, pageProps }) {
  return <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
}
