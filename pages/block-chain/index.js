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

const index = () => {
  return (
    <div>
      <Navbar />
      <BlockChainBanner />
      <BlockChainOffer />
      <BlockChainServices />
      <BlockChainBF />
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
    </div>
  );
};

export default index;
