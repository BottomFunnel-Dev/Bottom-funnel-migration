import React from "react";
import ApplyNavbar from "../../components/ApplyasTalent/applyNavbar/ApplyNavbar";
import Banner from "../../components/ApplyasTalent/banner/Banner";
import Head from "next/head";
export default function () {
  return (
    <div>
      {/* <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossorigin="anonymous"
        />
      </Head> */}
      <ApplyNavbar />
      <Banner />
    </div>
  );
}
