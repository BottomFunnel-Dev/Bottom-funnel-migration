import React from "react";

import { WearableBanner } from "../../components/WearableAppDevelopment/WearableBanner/WearableBanner";
import { WearableContainer } from "../../components/WearableAppDevelopment/WearableContainer/WearableContainer";
import { Scroller } from "../../components/WearableAppDevelopment/Scroller/Scroller";
import { Usercentric } from "../../components/WearableAppDevelopment/Usercentric/Usercentric";
import { WearablePartner } from "../../components/WearableAppDevelopment/WearablePartner/WearablePartner";

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

export default function WearableAppDevelopment() {
  return (
    <>
    <Head>
     
     
      
     <title>Wearable App Development Services | SmartWatch, AR/VR | BottomFunnel</title>
     <meta
       name="description"
       content="BottomFunnel IT Solution offers Wearable Device App Development Services for iOS and Android. We are expertise in developing apps for smart watches, Smart Glasses and fitness bands."
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
      <WearableBanner/>
      <WearableContainer />
      <Scroller />
      <Usercentric />
      <WearablePartner />

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
    </>
  );
}
