import React from "react";

import { MLBanner } from "../../components/MLPages/MLBanner/MLBanner";
import { MLPopular } from "../../components/MLPages/MLPopular/MLPopular";
import { MLMidBanner } from "../../components/MLPages/MLMidBanner/MLMidBanner";
import { MLApproach } from "../../components/MLPages/MLApproach/MLApproach";
import { MLwhyBF } from "../../components/MLPages/MLwhyBF/MLwhyBF";
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


export default function MachineLearning() {
  return (
    <div>

    <Head>
     <title>Machine Learning | Bottom Funnel</title>
        <meta
          name="description"
          content="Have you been looking to up your
           intelligence with the help of machines? 
           Well, read on to find out everything you
            need to know about machine learning, 
            and how it can help you in your business
            or personal life."
        />
      </Head>
        <main>

         <MLBanner />
         <MLPopular />
        <MLMidBanner />
       <MLApproach />
        <MLwhyBF />
        <CustomWebForm />
   {/* Other react required components       */}
        <StoriesSection />
        <OndemandSection />
        {/* <PortFolio />        */}
        {/* <PlanProject />      */}
          <SeoblogSection />
         <Revamping />
        <TextDropdown />
        <ContectForm />
        <MainFooter />
        </main>
    
    </div>
  );
}
