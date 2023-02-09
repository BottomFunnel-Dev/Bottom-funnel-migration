import React from 'react';

import { MetaverseBanner } from '../../components/MetaversePage/MetaverseBanner/MetaverseBanner';
import { MetaverseServices } from '../../components/MetaversePage/MetaverseServices/MetaverseServices';
import { MetaverseOffers } from '../../components/MetaversePage/MetaverseOffers/MetaverseOffers';
import { MetaverseMidBanner } from '../../components/MetaversePage/MetaverseMidBanner/MetaverseMidBanner';
import { MetaverseWhyBF } from '../../components/MetaversePage/MetaverseWhyBF/MetaverseWhyBF';
import { CustomWebForm } from '../../components/CustomisedWebPage/CustomWebForm/CustomWebForm';

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

export default function MetaverseWebPage () {
  return (
    <div>

      <Head>
        <title>Metaverse Development services | Bottom Funnel</title>
        <meta
          name="description"
          content="Our Metaverse solutions help companies innovate 
          and stay competitive. Our Metaverse services 
          development includes consulting, design, and 
          development. Read on to know more."
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
      <MetaverseBanner />
      <MetaverseServices />
      <MetaverseOffers />
      <MetaverseMidBanner />
      <MetaverseWhyBF />
      <CustomWebForm />
      
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