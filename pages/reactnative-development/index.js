import React from "react";

import { ReactNativeAppDevelopmentBanner } from "../../components/ReactNativeAppDevelopment/ReactNativeAppDevelopmentBanner/ReactNativeAppDevelopmentBanner";
// import { ReactNativeAppDevelopmentContain } from "../../components/ReactNativeAppDevelopment/ReactNativeAppDevelopmentContain/ReactNativeAppDevelopmentContain";
import { ReactNativeDevelopmentCard } from "../../components/ReactNativeAppDevelopment/ReactNativeDevelopmentCard/ReactNativeDevelopmentCard";
import { ReactNativeAppDevelopmentSolution } from "../../components/ReactNativeAppDevelopment/ReactNativeAppDevelopmentSolution/ReactNativeAppDevelopmentSolution";
import { Advantages } from "../../components/ReactNativeAppDevelopment/Advantages/Advantages";

import dynamic from "next/dynamic";
const TextDropdown = dynamic(
  () => import("../../components/CommonComponents/faqSection/Faqs"),
  { loading: "loading..." },
);
const OndemandSection = dynamic(
  () =>
    import("../../components/CommonComponents/OnDemandSection/OndemandSection"),
  { loading: "loading..." },
);
const PlanProject = dynamic(
  () => import("../../components/CommonComponents/PlanProject/PlanProject"),
  { loading: "loading..." },
);
const SeoblogSection = dynamic(
  () => import("../../components/CommonComponents/SeoBlogs/Seoblogs"),
  { loading: "loading..." },
);
const StoriesSection = dynamic(
  () =>
    import("../../components/CommonComponents/StoriesSection/StoriesSection"),
  { loading: "loading..." },
);
const Revamping = dynamic(
  () => import("../../components/revamping/Revamping"),
  { loading: "loading..." },
);
const ContectForm = dynamic(
  () => import("../../components/CommonComponents/ContectForm/ContectForm"),
  { loading: "loading..." },
);
const MainFooter = dynamic(
  () => import("../../components/CommonComponents/FooterSection/MainFooter"),
  { loading: "loading..." },
);
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
