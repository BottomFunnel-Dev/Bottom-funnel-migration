import React from "react";
import ApplyNavbar from "../../components/ApplyasTalent/applyNavbar/ApplyNavbar";
import Banner from "../../components/ApplyasTalent/banner/Banner";
import Head from "next/head";
export default function () {
  return (
    <div>
      <Head>
       <title>apply as talent</title>
      </Head>
      <ApplyNavbar />
      <Banner />
    </div>
  );
}
