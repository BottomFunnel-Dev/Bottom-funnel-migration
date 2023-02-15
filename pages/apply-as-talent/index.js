import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { Whywork } from "../../components/ApplyasTalent/whyWork/Whywork";
import Trusted from "../../components/SEO/SeoTrustedCompanies/Seotrusted";
import { newsLogo } from "../../components/Data/SeopartnerData";
import { JobOpening } from "../../components/ApplyasTalent/Opening/JobOpening";
import { currentopeningdata } from "../../Data/ApplyAsTalent";
import { Benifits } from "../../components/ApplyasTalent/Benifits/Benifits";
import { Lowerbanner } from "../../components/ApplyasTalent/Applytalentlowerbanner/Lowerbanner";
import { Applicationprocess } from "../../components/ApplyasTalent/ApplicationProcess/Applicationprocess";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import SeoblogSection from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import Revamping from "../../components/revamping/Revamping";
import TextDropdown from "../../components/CommonComponents/faqSection/Faqs";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";


// ---------------importing components with lazy loading-----------------------
const ApplyNavbar = dynamic(
  () => import("../../components/ApplyasTalent/applyNavbar/ApplyNavbar"),
  { loading: () => "loading..." },
);
const Banner = dynamic(
  () => import("../../components/ApplyasTalent/banner/Banner"),
  { loading: () => "loading..." },
);



// ------------------Main page function-----------------
export default function () {
  return (
    <div>
      <Head>
        <title>apply as talent</title>
      </Head>
      <ApplyNavbar />
      <Banner />
      <Trusted partnerLogo={newsLogo} />
    <Whywork />
    <JobOpening currentopeningdata={currentopeningdata}/>
    <Benifits />
    <Lowerbanner />
    <Applicationprocess />




    
   

  
      
   
    

  
    </div>
  );
}
