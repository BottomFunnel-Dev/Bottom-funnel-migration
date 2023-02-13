import React from "react";

import { CareerBanner } from "../../components/CareerPage/CareerBanner/CareerBanner";
import { CareerMain } from "../../components/CareerPage/CareerMain/CareerMain";
import { CareerReferral } from "../../components/CareerPage/CareerReferral/CareerReferral";
import { CarrerMidBanner } from "../../components/CareerPage/CarrerMidBanner/CarrerMidBanner";

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

const index = () => {
  return (
    <div style={{ color: "#393939" }}>
      <Head>
        <title>Career | Bottom Funnel </title>
        <meta
          name="description"
          content="We are working on some of the biggest names in the industry, so you can trust us when we say that our product will be in sync with changing market demands. Our team members are intelligent and fun humans who love what they do, and they will help you build better mobile apps!"
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
        <CareerBanner />
        <CareerMain />
        <CareerReferral />
        <CarrerMidBanner />

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
};

export default index;
