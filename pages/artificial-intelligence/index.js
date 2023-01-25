import React from "react";

import { AiContentBanner } from "../../components/AiContentService/AiContentBanner";
import { AiContentHuman } from "../../components/AiContentService/AiContentHuman";
import { AiHowDoesWorks } from "../../components/AiContentService/AiHowDoesWorks";
import { AIContentApplication } from "../../components/AiContentService/AIContentApplication";
import { AiContentTextOnly } from "../../components/AiContentService/AiContentTextOnly";

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
     <title>Data Science Services | Bottom Funnel</title>
        <meta
          name="description"
          content="Are you interested in working 
          in the exciting world of data science?
           Check out this article to find out what
            it is all about and how you can get
             started!"
        />
      </Head>
        <main>
           <Navbar />
          <AiContentBanner />
      {/*   <AiContentHuman /> 
       <AiHowDoesWorks />
         <AIContentApplication />*/}
         <AiContentTextOnly /> 

      {/* Other react required components   */}
      <StoriesSection />
      <OndemandSection />
      {/* <PortFolio />   */}
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

export default index;
