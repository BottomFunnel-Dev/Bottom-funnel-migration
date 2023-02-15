import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import Navbar from "../../components/Navbar/Navbar";

const OttHeader = dynamic(
  () => import("../../components/Ott-App-Page/ott-Header/OttHeader"),
  { loading: () => "loading..." }
);
const OttSolutions = dynamic(
  () =>
    import("../../components/Ott-App-Page/Ott-Solution-Card-Comp/OttSolutions"),
  { loading: () => "loading..." }
);
const OttAdminPannel = dynamic(
  () => import("../../components/Ott-App-Page/Ott-Admn-Pannel/OttAdminPannel"),
  { loading: () => "loading..." }
);
const OttFeatures = dynamic(
  () => import("../../components/Ott-App-Page/Ott-Features/OttFeatures"),
  { loading: () => "loading..." }
);
const OttFooter = dynamic(
  () => import("../../components/Ott-App-Page/Ott-Footer/OttFooter"),
  { loading: () => "loading..." }
);

export default function OTTPage() {
  return (
    <>
      <Head>
        <title>OTT Web and App Development Company | Bottom Funnel</title>
        <meta
          name="description"
          content="Wondering how to develop an OTT App? Don't worry, we 
          can help! In this blog, we will discuss the various 
          components that make up an OTT App and the various 
          steps involved in developing one."
        />
      </Head>

      <main>
        <div style={{ background: "black" }}>
          <OttHeader />
          <OttSolutions />
          <OttAdminPannel />
          <OttFeatures />
          <OttFooter />
        </div>
      </main>
    </>
  );
}
