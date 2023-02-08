import React from "react";

import { NFTDevBanner } from "../../components/NFTpage/NFTDevBanner/NFTDevBanner";
import { NFTAboutIt } from "../../components/NFTpage/NFTAboutIt/NFTAboutIt";
import { NFTOffers } from "../../components/NFTpage/NFTOffers/NFTOffers";
import { NFTSolutions } from "../../components/NFTpage/NFTSolutions/NFTSolutions";
import { NFTMidBanner } from "../../components/NFTpage/NFTMidBanner/NFTMidBanner";
import { NFTWhyBF } from "../../components/NFTpage/NFTWhyBF/NFTWhyBF";
import { CustomWebForm } from "../../components/CustomisedWebPage/CustomWebForm/CustomWebForm";

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

export default function NFTDevelopment () {
  return (
    <div>

      <Head>
        <title>NFT Development Service Company | Bottom Funnel</title>
        <meta
          name="description"
          content="Looking for reliable NFT development services? 
          Our team has extensive experience in this area 
          and offers cutting-edge solutions. Read on to know 
          about our services"
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
      <NFTDevBanner />
      <NFTAboutIt />
      <NFTOffers />
      <NFTSolutions />
      <NFTMidBanner />
      <NFTWhyBF />
      <CustomWebForm />

      {/* Other react required components  */}
      <StoriesSection />
      <OndemandSection />
      {/* <PortFolio />  */}
      <PlanProject /> 
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
      <MainFooter />
      </main>

    </div>
  );
};
