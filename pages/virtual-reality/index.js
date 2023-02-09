import React from "react";

import { VRBanner } from "../../components/VRPage/VRBanner/VRBanner";
import { VRMidBanner } from "../../components/VRPage/VRMidBanner/VRMidBanner";
import { VRServices } from "../../components/VRPage/VRServices/VRServices";
import { VRwhyBF } from "../../components/VRPage/VRwhyBF/VRwhyBF";
import { VRSlider } from "../../components/VRPage/VRSlider/VRSlider";
import { VRForm } from "../../components/VRPage/VRForm/VRForm";

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

export default function VirtualReality() {
  return (
    <div>
      <Head>
        <title>
          Virtual Reality Development Services Company | Bottom Funnel
        </title>
        <meta
          name="description"
          content="Virtual reality development offers an exciting new 
          platform for businesses to engage with their 
          customers. Read on to learn about the advantages 
          of offering VRS"
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
        <VRBanner />
        <VRServices />
        <VRMidBanner />
        <VRwhyBF />
        <VRSlider />
        <VRForm />

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
    </div>
  );
}
