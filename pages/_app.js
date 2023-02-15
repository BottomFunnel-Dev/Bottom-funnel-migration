import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "bootstrap/dist/css/bootstrap.min.css";
import dynamic from "next/dynamic";

import MainLoading from "../components/CommonComponents/MainLoading";
const Layout = dynamic(() => import("../components/Layouts"), {
  loading: () => <MainLoading />,
});

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
