import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
// import 'bootstrap/dist/css/bootstrap.css';
import Head from "next/head";
import SSRProvider from "react-bootstrap/SSRProvider";
export default function App({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossorigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />
    </SSRProvider>
  );
}
