import React from "react";

import SeoEmailSection from "../../components/SeoEmail/SeoEmailSection";
import Reviews from "../../components/SEO/SeoReviews/Reviews";
import Seostats from "../../components/SEO/Seostats/Seostats";
import Trusted from "../../components/SEO/SeoTrustedCompanies/Seotrusted";
import { dmpagesLogo } from "../../components/Data/SeopartnerData";
import SeoServices from "../../components/SEO/SeoServices/SeoServices";

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

export default function () {
  return (
    <div>
      <Head>
        <title>Professional SEO Email Services | Bottom Funnel</title>
        <meta
          name="description"
          content="Learn about our comprehensive SEO Email Service 
           solutions and how they can help your business by
           reading our blog today."
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
        <SeoEmailSection />
        <Seostats />
        <Reviews />
        <Trusted partnerLogo={dmpagesLogo} />
        <SeoServices />

        {/* Other react required components  */}
        <StoriesSection />
        <OndemandSection />
        {/* <PortFolio />  */}
        {/* <PlanProject />  */}
        <SeoblogSection />
        <Revamping />
        <TextDropdown />
        <ContectForm />
        <MainFooter />
      </main>
    </div>
  );
}
