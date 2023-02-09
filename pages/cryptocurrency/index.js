import React from "react";

import { CryptoCurrencyBanner } from "../../components/CryptoCurrency/CryptoCurrencyBanner";
import { CryptoCurrencyWork } from "../../components/CryptoCurrency/CryptoCurrencyWork";
import { CryptoCurrencyServices } from "../../components/CryptoCurrency/CryptoCurrencyServices";
import CryptoMining from "../../components/CryptoCurrency/CryptoMining";
import { CryptoAdminpannel } from "../../components/CryptoCurrency/CryptoAdminpannel";
import { CryptoLowerBanner } from "../../components/CryptoCurrency/CryptoLowerBanner";
import { CryptoWhyChoose } from "../../components/CryptoCurrency/CryptoWhyChoose";

import dynamic from "next/dynamic";
const TextDropdown = dynamic(
  () => import("../../components/CommonComponents/faqSection/Faqs"),
  { loading: "loading..." },
);
const OndemandSection = dynamic(
  () =>
    import("../../components/CommonComponents/OnDemandSection/OndemandSection"),
  { loading: "loading..." },
);
const PlanProject = dynamic(
  () => import("../../components/CommonComponents/PlanProject/PlanProject"),
  { loading: "loading..." },
);
const SeoblogSection = dynamic(
  () => import("../../components/CommonComponents/SeoBlogs/Seoblogs"),
  { loading: "loading..." },
);
const StoriesSection = dynamic(
  () =>
    import("../../components/CommonComponents/StoriesSection/StoriesSection"),
  { loading: "loading..." },
);
const Revamping = dynamic(
  () => import("../../components/revamping/Revamping"),
  { loading: "loading..." },
);
const ContectForm = dynamic(
  () => import("../../components/CommonComponents/ContectForm/ContectForm"),
  { loading: "loading..." },
);
const MainFooter = dynamic(
  () => import("../../components/CommonComponents/FooterSection/MainFooter"),
  { loading: "loading..." },
);
import Navbar from "../../components/Navbar/Navbar";
import Head from "next/head";

export default function CryptoCurrrency() {
  return (
    <div>
      <Head>
        <title>CryptoCurrrency Web App development | Bottom Funnel</title>
        <meta
          name="description"
          content="Are you looking for a reliable and affordable cryptocurrency web 
          app solution? Look no further than our experienced team of 
          developers. We will develop a custom cryptocurrency web 
          app for your business that meets all your requirements."
        />
      </Head>
      <main>
        <Navbar
          productMount={{
            navMount: false,
          }}
          navredux={{
            color: "white",
            logo: true,
          }}
        />
        <CryptoCurrencyBanner />
        <CryptoCurrencyWork />
        <CryptoCurrencyServices />
        <CryptoMining />
        <CryptoAdminpannel />
        <CryptoLowerBanner />
        <CryptoWhyChoose />

        <StoriesSection />
        {/* <Industries /> */}
        <PlanProject />
        <OndemandSection />
        {/* <PortFolio /> */}
        <SeoblogSection />
        <Revamping />
        <TextDropdown />
        <ContectForm />
        <MainFooter />
      </main>
    </div>
  );
}
