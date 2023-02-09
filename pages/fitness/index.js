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
<<<<<<< HEAD
import { TextDropdown } from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import { SeoblogSection } from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
=======

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
>>>>>>> c00e2e7cac480fb64b1e9e5f3cb77b61d0bea368
import Navbar from "../../components/Navbar/Navbar";
import Head from "next/head";

export default function Fintess() {
  return (
    <div>
      <Head>
        <title>Fitness Web App development | Bottom Funnel</title>
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
