import React from "react";

import { MarketplaceBanner } from "../../components/MarketPlace/MarketplaceBanner";
import MarketplaceFreelancer from "../../components/MarketPlace/MarketplaceFreelancer";
import MarketPlaceAdmin from "../../components/MarketPlace/MarketPlaceAdmin";
import MarketPlaceClients from "../../components/MarketPlace/MarketPlaceClients";
import Marketplaceborder from "../../components/MarketPlace/Marketplaceborder";
import Maketplacefooter from "../../components/MarketPlace/Maketplacefooter";

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

export default function MarketPlace() {
  return (
    <>
      <Head>
        <title> MarketPlace web App Development Company | Bottom Funnel </title>
        <meta
          name="description"
          content="At our web development company, we understand that a 
        successful marketplace requires a well-designed and user-friendly 
        web app. That's why we offer top notch marketplace web app 
        development solutions that will meet your exact requirements!"
        />
      </Head>

      <main>
        <Navbar
          productMount={{
            navMount: false,
          }}
          navredux={{
            color: "black",
            logo: false,
          }}
        />
        <MarketplaceBanner />
        <MarketplaceFreelancer />
        <MarketPlaceAdmin />
        <MarketPlaceClients />
        <Marketplaceborder />
        <Maketplacefooter />

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
    </>
  );
}
