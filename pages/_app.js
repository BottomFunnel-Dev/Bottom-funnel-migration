import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "bootstrap/dist/css/bootstrap.min.css";
import dynamic from "next/dynamic";
import Head from "next/head";

const Layout = dynamic(() => import("../components/Layouts"));

export default function App({ Component, pageProps }) {
  return (
    <>
   
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        />
   

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
