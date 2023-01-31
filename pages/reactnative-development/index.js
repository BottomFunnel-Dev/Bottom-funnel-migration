import React from "react";

import { ReactNativeAppDevelopmentBanner } from "../../components/ReactNativeAppDevelopment/ReactNativeAppDevelopmentBanner/ReactNativeAppDevelopmentBanner";
import { ReactNativeAppDevelopmentContain } from "../../components/ReactNativeAppDevelopment/ReactNativeAppDevelopmentContain/ReactNativeAppDevelopmentContain";
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
     <title>React Native Mobile App Development Company - Bottom Funnel, Cross Platform Application Development </title>
     <meta
       name="description"
       content="Bottom funnel  Mobile App Development Company is top notch mobile app development agency with highly skilled and competent professionals who work in a team and collaborate with each other to achieve exceptional results.We offer best mobile applications development services like Android and React applications, Web based apps, Games and Analytics App building."
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
      <ReactNativeAppDevelopmentBanner />
      <ReactNativeAppDevelopmentContain />
      <ReactNativeDevelopmentCard />
      <ReactNativeAppDevelopmentSolution />
      {/* <Advantages /> */}

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
