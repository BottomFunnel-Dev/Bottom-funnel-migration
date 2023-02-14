import React from "react";

import { Escootersection } from "../../components/Escooter/Escootersection";
import Escooterstealing from "../../components/Escooter/Escooterstealing";
import Escooterthunder from "../../components/Escooter/Escooterthunder";
import { Keyarea } from "../../components/Escooter/Keyarea";
import { EscooterKeyAreaAgain } from "../../components/Escooter/EscooterKeyAreaAgain";
import { EscooterAdminpannel } from "../../components/Escooter/EscooterAdminpannel";
import { Escooterhardware } from "../../components/Escooter/Escooterhardware";

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

export default function Escooter() {
  return (
    <div>
      <Head>
        <title>E-scooter Web App development | Bottom Funnel</title>
        <meta
          name="description"
          content="Are you looking for an e-scooter web app development company 
          that can help you build a successful and user-friendly e-scooter 
          web app? Look no further than Bottom Funnel, who offers excellent 
          E-Scooter web app development solutions."
        />
      </Head>

      <Navbar
        productMount={{
          navMount: false,
        }}
        navredux={{
          color: "black",
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
