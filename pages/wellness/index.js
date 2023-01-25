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

export default function Wellness() {
  return (
    <div>
      <Head>
        <title>Wellness Web App development | Bottom Funnel</title>
        <meta
          name="description"
          content="Oking to build a wellness web app? Look no further than our team
          of wellness web app development experts. Our team can help 
         you build a successful wellness web app that helps you stay on
          track with your health and fitness goals."
        />
      </Head>
      <main>
      <Navbar />
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
