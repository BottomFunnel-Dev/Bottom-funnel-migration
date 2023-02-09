import React from "react";
import { DigitalTransformationBanner } from "../../components/DigitalTransformation/DigitalTransformationBanner";
import { DigitalTransformationOurService } from "../../components/DigitalTransformation/DigitalTransformationOurService";
import { DigitalTransformationQuestion } from "../../components/DigitalTransformation/DigitalTransformationQuestion";
import { DigitalTransformationWhy } from "../../components/DigitalTransformation/DigitalTransformationWhy";
import { DigitalTransformationWhyChoose } from "../../components/DigitalTransformation/DigitalTransformationWhyChoose";
import { DigitalTransformTechTools } from "../../components/DigitalTransformation/DigitalTransformTechTools";

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
