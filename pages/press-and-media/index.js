import React from "react";

import { NewsEventBanner } from "../../components/PressAndMedia/NewsEventBanner/NewsEventBanner";
import { NewsEventSection } from "../../components/PressAndMedia/NewsEventSection/NewsEventSection";
import { MediaSection } from "../../components/PressAndMedia/MediaSection/MediaSection";
import { NewsEventSlider } from "../../components/PressAndMedia/NewsEventSlider/NewsEventSlider";

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

export default function PressMedia () {
  return (
    <div>

      <Head>
        <title>Press and Media| Bottom Funnel</title>
        <meta
          name="description"
          content="Find the latest news and updates on the press and media
          industry, including publications, conferences, law firms, 
         and more. Stay updated with our daily newsletter."
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
      <NewsEventBanner />
      <NewsEventSection />
      <MediaSection />
      {/* <NewsEventSlider /> */}

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
