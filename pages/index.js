import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import Navbar from "../components/Navbar/Navbar";

const About = dynamic(() => import("../components/AboutSection/About"), {
  loading: () => "Loading...",
});
const Awards = dynamic(() => import("../components/AwardSection/Awards"), {
  loading: () => "Loading...",
});

const Services = dynamic(() => import("../components/Services/Services"), {
  loading: () => "Loading...",
});



const CompanyLogo = dynamic(
  () => import("../components/CompanyLogos/CompanyLogo"),
  { loading: () => "Loading..." },
);

const BannerFull = dynamic(
  () => import("../components/mainSection/BannerFull"),
  {
    loading: () => "Loading...",
  },
);

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Bottom Funnel Global Web and App Development Company | Digital
          Transformation Service
        </title>
        <meta
          name="description"
          content="Bottom Funnel makes ridiculously easy-to-use marketing, sales, support and IT solutions"
        />
      </Head>
      <main>
        <BannerFull />
        <CompanyLogo />
        <About />
        <Services />
        <Awards />
      </main>
    </div>
  );
}
