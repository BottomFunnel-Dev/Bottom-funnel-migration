import React from "react";

import { EventsBanner } from "../../components/EventPage/EventsBanner";
import { EventsDevelopment } from "../../components/EventPage/EventsDevelopment";
import { EventsDevservices } from "../../components/EventPage/EventsDevservices";
import { EventsProvidedServices } from "../../components/EventPage/EventsProvidedServices";
import { EventsFeatures } from "../../components/EventPage/EventsFeatures";

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
