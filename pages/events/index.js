import React from "react";

import { EventsBanner } from "../../components/EventPage/EventsBanner";
import { EventsDevelopment } from "../../components/EventPage/EventsDevelopment";
import { EventsDevservices } from "../../components/EventPage/EventsDevservices";
import { EventsProvidedServices } from "../../components/EventPage/EventsProvidedServices";
import { EventsFeatures } from "../../components/EventPage/EventsFeatures";

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

const index = () => {
  return (
    <div>
      <Head>
        <title>Events Web App development | Bottom Funnel</title>
        <meta
          name="description"
          content="Wondering how to develop a web app for events? Here, we will be
          discussing the different steps involved in making an event web app
          and the pros and cons of each option."
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
        <EventsBanner />
        <EventsDevelopment />
        <EventsDevservices />
        <EventsProvidedServices />
        <EventsFeatures />

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
};

export default index;
