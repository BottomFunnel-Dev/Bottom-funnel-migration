import '../styles/globals.css'
import "slick-carousel/slick/slick.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import { store } from '../redux/store';
import { Provider } from 'react-redux';
export default function App({ Component, pageProps }) {
  return <Provider store={store}>
    <Component {...pageProps} />
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"/>
  </Provider>
}
  