import React from "react";

import FlowerDeliveryBanner from "../../components/FlowerDelivery/FlowerDeliveryBanner";
import { FlowerDeliveryService } from "../../components/FlowerDelivery/FlowerDeliveryService";
import FlowerDeliverySolution from "../../components/FlowerDelivery/FlowerDeliverySolution";
import FlowerDeliveryDriver from "../../components/FlowerDelivery/FlowerDeliveryDriver";
import FlowerDeliveryAdmin from "../../components/FlowerDelivery/FlowerDeliveryAdmin";
import FlowerDeliveryBannerbottom from "../../components/FlowerDelivery/FlowerDeliveryBannerbottom";
import FlowerDeliverylast from "../../components/FlowerDelivery/FlowerDeliverylast";

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

export default function FlowerDelivery() {
  return (
    <>
     <Head>
      <title>FlowerDelivery Web App Development
 Company | Bottom Funnel</title>
      <meta
        name="description"
        content="Want to build a flower-delivery web App but don't know where to 
        start? Let us help you out, we are the best in this field and have 
        years of experience in developing flower-delivery web Apps."
      />
   </Head>
   

    <main>
      <Navbar
        productMount={{
          navMount: false,
        }}
        navredux={{
          color: "black",
          logo: true,
        }}
      />
      <FlowerDeliveryBanner />
      <FlowerDeliveryService />
      <FlowerDeliverySolution />
      <FlowerDeliveryDriver />
      <FlowerDeliveryAdmin />
      {/* <FlowerDeliveryBannerbottom /> */}
      <FlowerDeliverylast />

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
