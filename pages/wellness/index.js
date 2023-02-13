import React from "react";

import {
  wellnessPatient,
  wellnessAdmin,
  wellnessDoctor,
} from "../../components/Data/panelsData";

import Wellnesscontainer from "../../components/Wellness/Wellnesscontainer";
import WellnessPatient from "../../components/Wellness/WellnessPatient/WellnessPatient";
import WellnessDoctor from "../../components/Wellness/WellnessDoctor/WellnessDoctor";
import WellnessAdmin from "../../components/Wellness/WellnessAdmin/WellnessAdmin";
import Wellnesshealthcare from "../../components/Wellness/Wellnesshealthcare";

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

export default function Wellness() {
  return (
    <div>
      <Head>
        <title>Wellness Web and App Development | Bottom Funnel</title>
        <meta
          name="description"
          content="Oking to build a wellness web app? Look no further than our team
          of wellness web app development experts. Our team can help 
         you build a successful wellness web app that helps you stay on
          track with your health and fitness goals."
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
        <Wellnesscontainer />
        <WellnessPatient customerData={wellnessPatient} />
        <WellnessDoctor customerData={wellnessDoctor} />
        <WellnessAdmin customerData={wellnessAdmin} />
        <Wellnesshealthcare />

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
