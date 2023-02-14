import React from "react";

import { TelecommunicationsHeader } from "../../components/Telecommunications/Telecommunications-Header/TelecommunicationsHeader";
import { TelecommunicationsCustomerApp } from "../../components/Telecommunications/TelecommunicationsCustomerApp/TelecommunicationsCustomerApp";
import { TelecommunicationsFooter } from "../../components/Telecommunications/Telecommunications-Footer/TelecommunicationsFooter";

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

export default function Telecommunication() {
  return (
    <div>
      <Head>
        <title>Telecommunication Web and App Development | Bottom Funnel</title>
        <meta
          name="description"
          content="Are you looking for a reliable and cost-effective telecommunication 
        web app development company? Look no further than ours! We 
        offer a wide range of innovative and cost-effective solutions that 
        will help you get your business online."
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
        <TelecommunicationsHeader />
        <TelecommunicationsCustomerApp />
        <TelecommunicationsFooter />

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
