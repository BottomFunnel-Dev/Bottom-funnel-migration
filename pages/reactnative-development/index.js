import React from "react";

import { ReactNativeAppDevelopmentBanner } from "../../components/ReactNativeAppDevelopment/ReactNativeAppDevelopmentBanner/ReactNativeAppDevelopmentBanner";
// import { ReactNativeAppDevelopmentContain } from "../../components/ReactNativeAppDevelopment/ReactNativeAppDevelopmentContain/ReactNativeAppDevelopmentContain";
import { ReactNativeDevelopmentCard } from "../../components/ReactNativeAppDevelopment/ReactNativeDevelopmentCard/ReactNativeDevelopmentCard";
import { ReactNativeAppDevelopmentSolution } from "../../components/ReactNativeAppDevelopment/ReactNativeAppDevelopmentSolution/ReactNativeAppDevelopmentSolution";
import { Advantages } from "../../components/ReactNativeAppDevelopment/Advantages/Advantages";

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

export default function ReactNativeAppDevelopment() {
  return (
    <>
    <Head>
     <title>React Native App Development Company | Bottom Funnel </title>
     <meta
       name="description"
       content="Looking for a reliable React Native development 
       company? If you're interested in learning how to 
       design and develop mobile apps using React Native, 
       read on."
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
      <ReactNativeAppDevelopmentBanner />
      {/* <ReactNativeAppDevelopmentContain /> */}
      <ReactNativeDevelopmentCard />
      <ReactNativeAppDevelopmentSolution />
      <Advantages />

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
