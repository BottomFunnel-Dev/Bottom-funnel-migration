import React from "react";
import { SocialMediaAdminPannel } from "../../components/SocialMedia/SocialMediaAdminPannel";
import { SocialMediaApproch } from "../../components/SocialMedia/SocialMediaApproch";
import { SocialMediaBanner } from "../../components/SocialMedia/SocialMediaBanner";
import { SocialMedialLowerBanner } from "../../components/SocialMedia/SocialMedialLowerBanner";
import { SocialMediaSolution } from "../../components/SocialMedia/SocialMediaSolution";
import { SocialMediaSuggestion } from "../../components/SocialMedia/SocialMediaSuggestion";

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

export default function SocialMedia() {
  return (
    <div>
      <Head>
        <title>Social Media Web App development | Bottom Funnel</title>
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
          color: "white",
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
