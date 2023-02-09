import React from "react";

import { DataScienceBanner } from "../../components/DataSciencePage/DataScienceBanner/DataScienceBanner";
import { DataScienceUnique } from "../../components/DataSciencePage/DataScienceUnique/DataScienceUnique";
import { DataScienceServices } from "../../components/DataSciencePage/DataScienceServices/DataScienceServices";
import { DataScienceMidBanner } from "../../components/DataSciencePage/DataScienceMidBanner/DataScienceMidBanner";
import { DataScienceBF } from "../../components/DataSciencePage/DataScienceBF/DataScienceBF";
import { DataScienceMethods } from "../../components/DataSciencePage/DataScienceMethods/DataScienceMethods";
import { DataScienceSlider } from "../../components/DataSciencePage/DataScienceSlider/DataScienceSlider";
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

export default function DataScience () {
  return (
    <div>

      <Head>
        <title>Data Science Company | Bottom Funnel</title>
        <meta
          name="description"
          content="Looking for data science services? We've got you 
          covered. From data analysis to data visualization, 
          we have it all. Read on to know about our offerings 
          and how to register for them."
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
      <DataScienceBanner />
       <DataScienceUnique />
         <DataScienceServices />
         <DataScienceMidBanner />
          <DataScienceBF />
           <DataScienceMethods />
         <DataScienceSlider />
        <CustomWebForm />
      
     {/* Other react required components */}
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
