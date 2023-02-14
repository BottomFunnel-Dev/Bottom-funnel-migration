import React from "react";
import { Fitnesscontainer } from "../../components/Fitness/Fitnesscontainer";
import { fitnessLogo } from "../../components/Data/SeopartnerData";
import Trusted from "../../components/SEO/SeoTrustedCompanies/Seotrusted";
import Brand from "../../components/Fitness/Brand";
import FitnessFeature from "../../components/Fitness/FitnessFeature";
import Fitnessstart from "../../components/Fitness/FitnessStart";
import Fitnessexercise from "../../components/Fitness/Fitnessexercise";
import FitnessSolution from "../../components/Fitness/FitnessSolution";
import Fitnesswhy from "../../components/Fitness/Fitnesswhy";

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

export default function Fintess() {
  return (
    <div>
      <Head>
        <title>Fitness Web and App Development Company | Bottom Funnel</title>
        <meta
          name="description"
          content="Are you looking for a Fitness web app development company that 
          can help you design and develop a top-notch fitness web app? 
          Look no further! Here at our company, we understand the 
          importance of providing users with a quality and innovative 
          fitness web app."
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
        <Fitnesscontainer />
        <Trusted partnerLogo={fitnessLogo} />
        <Brand />
        <FitnessFeature />
        <Fitnessstart />
        <Fitnessexercise />
        <FitnessSolution />
        <Fitnesswhy />

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
