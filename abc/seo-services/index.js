import React from "react";
import { dmpagesLogo } from "../../components/Data/SeopartnerData";

import Seosection from "../../components/SEO/SEO section/Seosection";
import Seostats from "../../components/SEO/Seostats/Seostats";
import Reviews from "../../components/SEO/SeoReviews/Reviews";
import Seotrusted from "../../components/SEO/SeoTrustedCompanies/Seotrusted";
import Trusted from "../../components/SEO/SeoTrustedCompanies/Seotrusted";
import EnquiryNow from "../../components/SEO/EnquiryNow/EnquiryNow";
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

export default function SEOMainPage() {
  return (
    <div>
      <Head>
        <title>Professional SEO Services Company | Bottom Funnel</title>
        <meta
          name="description"
          content="Want to improve your SEO rankings and drive more
          traffic to your website? We've got the best SEO 
         services solutions for you. Read on to know!."
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
        <Seosection />
        <Seostats />
        <Reviews />
        {/* <Seotrusted /> */}
        <Trusted partnerLogo={dmpagesLogo} />
        <EnquiryNow />
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
