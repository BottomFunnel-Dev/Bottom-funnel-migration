import React from "react";

import { CryptoCurrencyBanner } from "../../components/CryptoCurrency/CryptoCurrencyBanner";
import { CryptoCurrencyWork } from "../../components/CryptoCurrency/CryptoCurrencyWork";
import { CryptoCurrencyServices } from "../../components/CryptoCurrency/CryptoCurrencyServices";
import CryptoMining from "../../components/CryptoCurrency/CryptoMining";
import { CryptoAdminpannel } from "../../components/CryptoCurrency/CryptoAdminpannel";
import { CryptoLowerBanner } from "../../components/CryptoCurrency/CryptoLowerBanner";
import { CryptoWhyChoose } from "../../components/CryptoCurrency/CryptoWhyChoose";

import { TextDropdown } from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import { SeoblogSection } from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
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
