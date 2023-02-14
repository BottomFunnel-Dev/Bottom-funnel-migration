import React from "react";

import { XamarinAppDevelopmentBanner } from "../../components/XamarinAppDevelopment/XamarinAppDevelopmentBanner/XamarinAppDevelopmentBanner";
import { XamarinMobileDevelopment } from "../../components/XamarinAppDevelopment/XamarinMobileDevelopment/XamarinMobileDevelopment";
import { XamarinSolutions } from "../../components/XamarinAppDevelopment/XamarinSolutions/XamarinSolutions";
import { WhyChooseXamarin } from "../../components/XamarinAppDevelopment/WhyChooseXamarin/WhyChooseXamarin";
import { XamarinDevelopers } from "../../components/XamarinAppDevelopment/XamarinDevelopers/XamarinDevelopers";
import { XamarinApproach } from "../../components/XamarinAppDevelopment/XamarinApproach/XamarinApproach";
import { XamarinDevelopmentExpertise } from "../../components/XamarinAppDevelopment/XamarinDevelopmentExpertise/XamarinDevelopmentExpertise";

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

export default function XamarinAppDevelopment() {
  return (
    <>
    <Head>
      <title>Xamarin App Development Company | Hire Xamarin Developers | BottomFunnel</title>
     <meta
       name="description"
       content="BottomFunnel is a leading Xamarin app development company. Not just developing, we transform ideas into a digital existence. Hire Xamarin app developers from us."
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
      <XamarinAppDevelopmentBanner />
      <XamarinMobileDevelopment />
      <XamarinSolutions />
      <WhyChooseXamarin />
      <XamarinDevelopers />
      <XamarinApproach />
      <XamarinDevelopmentExpertise />
      
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
