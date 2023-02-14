import React from "react";
import { SocialMediaAdminPannel } from "../../components/SocialMedia/SocialMediaAdminPannel";
import { SocialMediaApproch } from "../../components/SocialMedia/SocialMediaApproch";
import { SocialMediaBanner } from "../../components/SocialMedia/SocialMediaBanner";
import { SocialMedialLowerBanner } from "../../components/SocialMedia/SocialMedialLowerBanner";
import { SocialMediaSolution } from "../../components/SocialMedia/SocialMediaSolution";
import { SocialMediaSuggestion } from "../../components/SocialMedia/SocialMediaSuggestion";

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

export default function SocialMedia() {
  return (
    <div>
      <Head>
        <title>Social Media Web and App Development | Bottom Funnel</title>
        <meta
          name="description"
          content="Want to know the best way to connect with your target audience
          on social media? Check out our social media web app 
         development services and see for yourself how we can help 
         you achieve your goals!"
        />
      </Head>
      <main>
        <Navbar
          productMount={{
            navMount: false,
          }}
          navredux={{
            color: "black",
            logo: true,
          }}
        />
        <SocialMediaBanner />
        <SocialMediaSuggestion />
        <SocialMediaApproch />
        <SocialMediaSolution />
        <SocialMediaAdminPannel />
        <SocialMedialLowerBanner />

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
