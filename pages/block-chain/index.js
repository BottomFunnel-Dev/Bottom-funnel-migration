import React from "react";

import { BlockChainBanner } from "../../components/BlockChainPage/BlockChainBanner/BlockChainBanner";
import { BlockChainOffer } from "../../components/BlockChainPage/BlockChainOffer/BlockChainOffer";
import { BlockChainServices } from "../../components/BlockChainPage/BlockChainServices/BlockChainServices";
import { BlockChainBF } from "../../components/BlockChainPage/BlockChainBF/BlockChainBF";
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

const index = () => {
  return (
    <div>

    <Head>
    <title> Block Chain Service Company | Bottom Funnel</title>
    <meta
      name="description"
      content="Block Chain services offer a number of advantages 
      to companies. Learn about the top reasons for 
      adopting block chain technology and get information
      on how it can help you."
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
      <BlockChainBanner />
      <BlockChainOffer />
      <BlockChainServices />
   {  /*  <BlockChainBF /> */}
      <CustomWebForm />
      
      {/* Other react required components  */}
      <StoriesSection />
      <OndemandSection />
      {/* <PortFolio />  */}
      {/* <PlanProject />  */}
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
      <MainFooter />

      </main>
    </div>
  );
};

export default index;
