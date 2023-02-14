import React from "react";

import { EventsBanner } from "../../components/EventPage/EventsBanner";
import { EventsDevelopment } from "../../components/EventPage/EventsDevelopment";
import { EventsDevservices } from "../../components/EventPage/EventsDevservices";
import { EventsProvidedServices } from "../../components/EventPage/EventsProvidedServices";
import { EventsFeatures } from "../../components/EventPage/EventsFeatures";

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
        <EventsBanner />
        <EventsDevelopment />
        <EventsDevservices />
        <EventsProvidedServices />
        <EventsFeatures />
      </main>
    </div>
  );
};

export default index;
