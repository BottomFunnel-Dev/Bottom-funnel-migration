import React from "react";
import AgricultureBanner from "../../components/Agriculture/AgricultureBanner/AgricultureBanner";
import { AgricultureSolutions } from "../../components/Agriculture/AgricultureSolutions/AgricultureSolutions";

import {
  logisticsCustomer,
  agricultureConsumerApp,
  agricultureAdmin,
} from "../../components/Data/agriculture.js";
import AgricultureCustomerApp from "../../components/Agriculture/AgricultureCustomerApp/AgricultureCustomerApp";
import AgricultureConsumerApp from "../../components/Agriculture/AgricultureConsumerApp/AgricultureConsumerApp";
import AgricultureAdminPanel from "../../components/Agriculture/AgricultureAdminPanel/AgricultureAdminPanel";

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

export default function AgriculturePage() {
  return (
    <>
         <Head>
      <title>Agriculture Solution Web App Development Company | Bottom Funnel</title>
      <meta
        name="description"
        content="Are you looking for a reliable and affordable Agriculture 
        Solution Web App Development company? Look no further 
        than our team of experienced developers! We have years of 
        experience in this field and will provide you with the best 
        possible solution at an unbeatable price."
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
      <AgricultureBanner />

      <AgricultureSolutions />

      <AgricultureCustomerApp agricultureCustomerApp={logisticsCustomer} />
      <AgricultureConsumerApp driveData={agricultureConsumerApp} />
      <AgricultureAdminPanel plantBasedAdminData={agricultureAdmin} />

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
