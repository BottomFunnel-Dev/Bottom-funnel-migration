import React from "react";

import { Escootersection } from "../../components/Escooter/Escootersection";
import Escooterstealing from "../../components/Escooter/Escooterstealing";
import Escooterthunder from "../../components/Escooter/Escooterthunder";
import { Keyarea } from "../../components/Escooter/Keyarea";
import { EscooterKeyAreaAgain } from "../../components/Escooter/EscooterKeyAreaAgain";
import { EscooterAdminpannel } from "../../components/Escooter/EscooterAdminpannel";
import { Escooterhardware } from "../../components/Escooter/Escooterhardware";

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

export default function Escooter() {
  return (
    <div>

      <Head>
        <title>Escooter Web App development | Bottom Funnel</title>
        <meta
          name="description"
          content="Are you looking for an e-scooter web app development company 
          that can help you build a successful and user-friendly e-scooter 
          web app? Look no further than VinCard, who offers excellent 
          E-Scooter web app development solutions."
        />
      </Head>

<Navbar
        productMount={{
          navMount: false,
        }}
        navredux={{
          color: "white",
          logo: true,
        }}
      />
      <Escootersection />
      <Escooterstealing />
      <Escooterthunder />
      <Keyarea />
      <EscooterKeyAreaAgain />
      <EscooterAdminpannel />
      <Escooterhardware />

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
    </div>
  );
}
