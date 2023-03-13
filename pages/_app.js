import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "bootstrap/dist/css/bootstrap.min.css";
import dynamic from "next/dynamic";

const Layout = dynamic(() => import("../components/Layouts"));

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
