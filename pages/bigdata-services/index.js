import React from "react";

import { BigDataServiceBanner } from "../../components/BigDataServiceCom/BigDataServiceBanner/BigDataServiceBanner";
import { BigDataServicePopular } from "../../components/BigDataServiceCom/BigDataServicePopular/BigDataServicePopular";
import { BigDataServiceHandling } from "../../components/BigDataServiceCom/BigDataServiceHandling/BigDataServiceHandling";
import { BigDataServiceBF } from "../../components/BigDataServiceCom/BigDataServiceBF/BigDataServiceBF";
import { CustomWebForm } from "../../components/BigDataServiceCom/BigDataServiceForm/BigDataServiceForm";

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

export default function BigDataService() {
  return (
    <div>
    <Head>
    <title>Big Data Development Services Company | Bottom Funnel</title>
    <meta
      name="description"
      content="Are you looking for a Big Data Company that can 
      provide you with reliable and effective Big Data 
      services? Look no further! Our Big Data Services 
      include Big Data analysis, data preparation, and 
      more!"
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
     <BigDataServiceBanner />
     <BigDataServicePopular />
     <BigDataServiceHandling />
     <BigDataServiceBF />
   {  /*  <CustomWebForm /> */ }
      
      {/* Other react required components */ }
      <StoriesSection />
      <OndemandSection />
      {/* <PortFolio />  */ }
      {/* <PlanProject />  */ }
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
      <MainFooter />
   
      </main>
      
    </div>
  );
};