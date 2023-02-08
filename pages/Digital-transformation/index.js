import React from "react";
import { DigitalTransformationBanner } from "../../components/DigitalTransformation/DigitalTransformationBanner";
import { DigitalTransformationOurService } from "../../components/DigitalTransformation/DigitalTransformationOurService";
import { DigitalTransformationQuestion } from "../../components/DigitalTransformation/DigitalTransformationQuestion";
import { DigitalTransformationWhy } from "../../components/DigitalTransformation/DigitalTransformationWhy";
import { DigitalTransformationWhyChoose } from "../../components/DigitalTransformation/DigitalTransformationWhyChoose";
import { DigitalTransformTechTools } from "../../components/DigitalTransformation/DigitalTransformTechTools";

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

export default function DigitalTransformation() {
  return (
    <div style={{ color: "#393939" }}>
      <Head>
        <title>Digital Transformation | Bottom Funnel</title>
        <meta
          name="description"
          content="Get ready for a revolution in technology with the promise 
          of a better, more efficient workplace. Learn about the 
          driving factors of digital transformation and how it can 
          benefit your business."
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
        <DigitalTransformationBanner />
        <DigitalTransformationWhy />
        <DigitalTransformationOurService />
        <DigitalTransformationQuestion />
        <DigitalTransformationWhyChoose />
        <DigitalTransformTechTools />
        {/* ----- End of main page. Now Further components ----- */}

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
