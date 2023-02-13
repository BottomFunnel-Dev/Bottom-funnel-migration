import React from "react";
import Cannabisoverview from "../../components/Cannabis/Cannabisoverview";
import Cannabissolution from "../../components/Cannabis/Cannabissolution";
import { Cannabiscontainer } from "../../components/Cannabis/Cannabiscontainer";
import { Cannabiscustomersection } from "../../components/Cannabis/Cannabiscustomersection";
import { Cannabisadmin } from "../../components/Cannabis/Cannabisadmin";
import { Cannabisdrive } from "../../components/Cannabis/Cannabisdrive";

import dynamic from "next/dynamic";
const TextDropdown = dynamic(
  () => import("../../components/CommonComponents/faqSection/Faqs"),
  { loading: "loading..." }
);
const OndemandSection = dynamic(
  () =>
    import("../../components/CommonComponents/OnDemandSection/OndemandSection"),
  { loading: "loading..." }
);
const PlanProject = dynamic(
  () => import("../../components/CommonComponents/PlanProject/PlanProject"),
  { loading: "loading..." }
);
const SeoblogSection = dynamic(
  () => import("../../components/CommonComponents/SeoBlogs/Seoblogs"),
  { loading: "loading..." }
);
const StoriesSection = dynamic(
  () =>
    import("../../components/CommonComponents/StoriesSection/StoriesSection"),
  { loading: "loading..." }
);
const Revamping = dynamic(
  () => import("../../components/revamping/Revamping"),
  { loading: "loading..." }
);
const ContectForm = dynamic(
  () => import("../../components/CommonComponents/ContectForm/ContectForm"),
  { loading: "loading..." }
);
const MainFooter = dynamic(
  () => import("../../components/CommonComponents/FooterSection/MainFooter"),
  { loading: "loading..." }
);
import Navbar from "../../components/Navbar/Navbar";
import Head from "next/head";

export default function Cannabis() {
  return (
    <>
      <Head>
        <title> Cannabis web App Development Company | Bottom Funnel</title>
        <meta
          name="description"
          content="Wondering if cannabis Web App development is the right decision 
        for your business? Learn about the many benefits of using a 
        cannabis web App development company such as VinCard."
        />
      </Head>
      <main>
        <Navbar
          productMount={{
            navMount: false,
          }}
          navredux={{
            color: "black",
            logo: false,
          }}
        />
        <Cannabiscontainer />
        <Cannabissolution />
        <Cannabisoverview />
        <Cannabiscustomersection />
        <Cannabisadmin />
        <Cannabisdrive />

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
    </>
  );
}
