import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

// ---------------importing components with lazy loading-----------------------
const ApplyNavbar = dynamic(
  () => import("../../components/ApplyasTalent/applyNavbar/ApplyNavbar"),
  { loading: () => "loading..." },
);
const Banner = dynamic(
  () => import("../../components/ApplyasTalent/banner/Banner"),
  { loading: () => "loading..." },
);

// ------------------Main page function-----------------
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
