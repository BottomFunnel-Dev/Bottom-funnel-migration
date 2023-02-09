import React from "react";

import Videostreamingcontainer from "../../components/Videostreaming/Videostreamingcontainer";
import Trusted from "../../components/SEO/SeoTrustedCompanies/Seotrusted";
import Services from "../../components/Videostreaming/Services";
import Grow from "../../components/Videostreaming/Grow";
import Featuressection from "../../components/Videostreaming/Featuressection";
import { videostreamLogo } from "../../components/Data/SeopartnerData";

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

export default function VideoStreaming() {
  return (
    <div>
      <Head>
        <title>Video Streaming Web and App Development | Bottom Funnel</title>
        <meta
          name="description"
          content="Are you interested in learning more about video stream web 
          app development? Read on to learn more about our innovative 
          solutions that will help you stream your videos in the best 
          possible way!"
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
        <Videostreamingcontainer />
        <Trusted partnerLogo={videostreamLogo} />
        <Services />
        <Grow />
        <Featuressection />

        <StoriesSection />
        {/* <Industries /> */}
        <PlanProject />
        <OndemandSection />
        {/* <PortFolio /> */}
        <SeoblogSection />
        <Revamping />
        <TextDropdown />
        <ContectForm />
        <MainFooter />
      </main>
    </div>
  );
}
