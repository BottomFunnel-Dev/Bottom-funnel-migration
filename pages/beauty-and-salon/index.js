import React from "react";
import { beautyLogo } from "../../components/Data/SeopartnerData";
import dynamic from "next/dynamic";
import Head from "next/head";

const Beautycontainer = dynamic(
  () => import("../../components/Beautyandcare/Beautycontainer"),
  { loading: "loading..." }
);

const Trusted = dynamic(
  () => import("../../components/SEO/SeoTrustedCompanies/Seotrusted"),
  { loading: "loading..." }
);

const Diversesection = dynamic(
  () => import("../../components/Beautyandcare/Diversesection"),
  { loading: "loading..." }
);

const Disscus = dynamic(
  () => import("../../components/Beautyandcare/Disscus"),
  { loading: "loading..." }
);

const Feature = dynamic(
  () => import("../../components/Beautyandcare/Feature"),
  { loading: "loading..." }
);

export default function BeautyandCare() {
  return (
    <>
      <Head>
        <title>
          Beauty and Salon Web App Developmen Company | Bottom Funnel
        </title>
        <meta
          name="description"
          content="When it comes to online beauty and salon services, our team of experts know just what you need! We will help you 
          develop a web app that provides an excellent user experience, is easy to use, and meets all your business requirements. 
          Contact us today to learn more!"
        />
      </Head>

      <main>
        <Beautycontainer />
        <Trusted partnerLogo={beautyLogo} />
        <Diversesection />
        <Disscus />
        <Feature />
      </main>
    </>
  );
}
