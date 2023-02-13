import React from "react";
import Seostats from "../../components/SEO/Seostats/Seostats";
import { SeoLocalSection } from "../../components/SeoLocalServices/SeoLocalSection";
import { dmpagesLogo } from "../../components/Data/SeopartnerData";
import Reviews from "../../components/SEO/SeoReviews/Reviews";
import Trusted from "../../components/SEO/SeoTrustedCompanies/Seotrusted";
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

export default function LocalSEO() {
  return (
    <div>
      <Head>
        <title>Local SEO Services Company | Bottom Funnel</title>
        <meta
          name="description"
          content="Need some local SEO services for your business? 
          We've got you covered. Our range of reliable and 
          effective SEO services include organic search 
          engine optimization, PPC campaigns, website 
          optimization, and much more. Check them out!"
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
        <SeoLocalSection />
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
